// Admin teachers management page
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit, Trash2, Star, UserCheck } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Teacher {
  id: string;
  name: string;
  specialization: string;
  experience_years: number;
  bio: string;
  image_url: string;
  rating: number;
  students_count: number;
  is_active: boolean;
}

export default function AdminTeachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchTeachers = async () => {
    const { data, error } = await supabase
      .from("teachers")
      .select("*")
      .order("created_at", { ascending: false });

    if (data && !error) {
      setTeachers(data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const toggleActive = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("teachers")
      .update({ is_active: !currentStatus })
      .eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update teacher status",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `Teacher ${!currentStatus ? "activated" : "deactivated"} successfully`,
      });
      fetchTeachers();
    }
  };

  const deleteTeacher = async (id: string) => {
    const { error } = await supabase.from("teachers").delete().eq("id", id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete teacher",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Teacher deleted successfully",
      });
      fetchTeachers();
    }
  };

  return (
    <AdminLayout>
      <Helmet>
        <title>Manage Teachers | Admin - Mushaf Al Noor Academy</title>
      </Helmet>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold">Teachers</h1>
            <p className="text-muted-foreground mt-1">
              Manage your teaching staff
            </p>
          </div>
          <Link to="/admin/teachers/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Teacher
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : teachers.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <UserCheck className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-heading text-xl font-semibold mb-2">
                No Teachers Yet
              </h2>
              <p className="text-muted-foreground mb-6">
                Add your first teacher to get started
              </p>
              <Link to="/admin/teachers/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Teacher
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={teacher.image_url || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className="absolute top-3 right-3"
                    variant={teacher.is_active ? "default" : "secondary"}
                  >
                    {teacher.is_active ? "Active" : "Inactive"}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-semibold text-lg">{teacher.name}</h3>
                    <div className="flex items-center gap-1 text-gold">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm">{teacher.rating}</span>
                    </div>
                  </div>
                  <p className="text-primary text-sm mb-2">{teacher.specialization}</p>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {teacher.bio}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{teacher.experience_years} years exp.</span>
                    <span>{teacher.students_count} students</span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => toggleActive(teacher.id, teacher.is_active)}
                    >
                      {teacher.is_active ? "Deactivate" : "Activate"}
                    </Button>
                    <Link to={`/admin/teachers/${teacher.id}/edit`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Teacher</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{teacher.name}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteTeacher(teacher.id)}
                            className="bg-destructive text-destructive-foreground"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
