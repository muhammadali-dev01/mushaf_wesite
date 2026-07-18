// Admin enrollments management page
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X, GraduationCap, Clock, CheckCircle, XCircle } from "lucide-react";

interface Enrollment {
  id: string;
  status: string;
  progress: number;
  enrolled_at: string;
  profiles: {
    full_name: string;
    email: string;
  } | null;
  courses: {
    title: string;
  } | null;
}

export default function AdminEnrollments() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const { toast } = useToast();

  const fetchEnrollments = async () => {
    let query = supabase
      .from("enrollments")
      .select(`
        id,
        status,
        progress,
        enrolled_at,
        profiles!enrollments_user_id_fkey (
          full_name,
          email
        ),
        courses (
          title
        )
      `)
      .order("enrolled_at", { ascending: false });

    if (filter !== "all") {
      query = query.eq("status", filter as "pending" | "approved" | "rejected" | "completed");
    }

    const { data, error } = await query;

    if (data && !error) {
      setEnrollments(data as unknown as Enrollment[]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchEnrollments();
  }, [filter]);

  const updateStatus = async (id: string, status: "pending" | "approved" | "rejected" | "completed") => {
    const { error } = await supabase
      .from("enrollments")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update enrollment status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `Enrollment ${status} successfully`,
      });
      fetchEnrollments();
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="text-orange-500 border-orange-500"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
      case "approved":
        return <Badge variant="default" className="bg-green-500"><CheckCircle className="h-3 w-3 mr-1" />Approved</Badge>;
      case "rejected":
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
      case "completed":
        return <Badge className="bg-blue-500"><GraduationCap className="h-3 w-3 mr-1" />Completed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>Manage Enrollments | Admin - Mushaf Al Noor Academy</title>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">Enrollments</h1>
          <p className="text-muted-foreground mt-1">
            Manage student course enrollments
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {["all", "pending", "approved", "rejected", "completed"].map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(status)}
              className="capitalize"
            >
              {status}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : enrollments.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-heading text-xl font-semibold mb-2">
                No Enrollments Found
              </h2>
              <p className="text-muted-foreground">
                {filter !== "all" ? `No ${filter} enrollments at this time` : "No enrollments yet"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {enrollments.map((enrollment) => (
                    <TableRow key={enrollment.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{enrollment.profiles?.full_name || "N/A"}</p>
                          <p className="text-sm text-muted-foreground">{enrollment.profiles?.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{enrollment.courses?.title || "N/A"}</TableCell>
                      <TableCell>{getStatusBadge(enrollment.status)}</TableCell>
                      <TableCell>{enrollment.progress}%</TableCell>
                      <TableCell>
                        {new Date(enrollment.enrolled_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right">
                        {enrollment.status === "pending" && (
                          <div className="flex justify-end gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-green-500 hover:text-green-600"
                              onClick={() => updateStatus(enrollment.id, "approved")}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-destructive"
                              onClick={() => updateStatus(enrollment.id, "rejected")}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
