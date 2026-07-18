// Admin Dashboard - Overview and statistics
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, DollarSign, TrendingUp, FileText, GraduationCap, Bell } from "lucide-react";

interface Stats {
  totalStudents: number;
  totalCourses: number;
  totalEnrollments: number;
  pendingEnrollments: number;
  totalBlogPosts: number;
  totalTeachers: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalStudents: 0,
    totalCourses: 0,
    totalEnrollments: 0,
    pendingEnrollments: 0,
    totalBlogPosts: 0,
    totalTeachers: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      // Fetch counts from all tables
      const [
        { count: studentsCount },
        { count: coursesCount },
        { count: enrollmentsCount },
        { count: pendingCount },
        { count: blogCount },
        { count: teachersCount },
      ] = await Promise.all([
        supabase.from("profiles").select("*", { count: "exact", head: true }),
        supabase.from("courses").select("*", { count: "exact", head: true }),
        supabase.from("enrollments").select("*", { count: "exact", head: true }),
        supabase.from("enrollments").select("*", { count: "exact", head: true }).eq("status", "pending"),
        supabase.from("blog_posts").select("*", { count: "exact", head: true }),
        supabase.from("teachers").select("*", { count: "exact", head: true }),
      ]);

      setStats({
        totalStudents: studentsCount || 0,
        totalCourses: coursesCount || 0,
        totalEnrollments: enrollmentsCount || 0,
        pendingEnrollments: pendingCount || 0,
        totalBlogPosts: blogCount || 0,
        totalTeachers: teachersCount || 0,
      });
      setIsLoading(false);
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: "Total Students", value: stats.totalStudents, icon: Users, color: "bg-blue-500/10 text-blue-500" },
    { label: "Active Courses", value: stats.totalCourses, icon: BookOpen, color: "bg-primary/10 text-primary" },
    { label: "Total Enrollments", value: stats.totalEnrollments, icon: GraduationCap, color: "bg-green-500/10 text-green-500" },
    { label: "Pending Approvals", value: stats.pendingEnrollments, icon: Bell, color: "bg-orange-500/10 text-orange-500" },
    { label: "Blog Posts", value: stats.totalBlogPosts, icon: FileText, color: "bg-purple-500/10 text-purple-500" },
    { label: "Teachers", value: stats.totalTeachers, icon: Users, color: "bg-gold/10 text-gold" },
  ];

  return (
    <AdminLayout>
      <Helmet>
        <title>Admin Dashboard | Mushaf Al Noor Academy</title>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to the admin panel
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {statCards.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                          <p className="text-3xl font-bold mt-1">{stat.value}</p>
                        </div>
                        <div className={`p-4 rounded-xl ${stat.color}`}>
                          <stat.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <a href="/admin/courses/new" className="p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors text-center">
                    <BookOpen className="h-8 w-8 mx-auto text-primary mb-2" />
                    <p className="font-medium">Add Course</p>
                  </a>
                  <a href="/admin/teachers/new" className="p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors text-center">
                    <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                    <p className="font-medium">Add Teacher</p>
                  </a>
                  <a href="/admin/blog/new" className="p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors text-center">
                    <FileText className="h-8 w-8 mx-auto text-primary mb-2" />
                    <p className="font-medium">New Blog Post</p>
                  </a>
                  <a href="/admin/enrollments" className="p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors text-center">
                    <GraduationCap className="h-8 w-8 mx-auto text-primary mb-2" />
                    <p className="font-medium">Manage Enrollments</p>
                  </a>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </AdminLayout>
  );
}
