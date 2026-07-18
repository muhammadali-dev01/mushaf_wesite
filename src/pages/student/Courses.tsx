// Student courses page - view enrolled courses and lessons
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { StudentLayout } from "@/components/student/StudentLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, PlayCircle, Clock, CheckCircle } from "lucide-react";

interface Enrollment {
  id: string;
  status: string;
  progress: number;
  enrolled_at: string;
  courses: {
    id: string;
    title: string;
    description: string;
    image_url: string;
    duration: string;
    level: string;
  } | null;
}

export default function StudentCourses() {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!user) return;

      const { data } = await supabase
        .from("enrollments")
        .select(`
          id,
          status,
          progress,
          enrolled_at,
          courses (
            id,
            title,
            description,
            image_url,
            duration,
            level
          )
        `)
        .eq("user_id", user.id)
        .eq("status", "approved");

      if (data) {
        setEnrollments(data as Enrollment[]);
      }
      setIsLoading(false);
    };

    fetchEnrollments();
  }, [user]);

  return (
    <StudentLayout>
      <Helmet>
        <title>My Courses | Mushaf Al Noor Academy</title>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">My Courses</h1>
          <p className="text-muted-foreground mt-1">
            Continue learning from where you left off
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : enrollments.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-heading text-xl font-semibold mb-2">
                No Enrolled Courses
              </h2>
              <p className="text-muted-foreground mb-6">
                Start your Quran learning journey by enrolling in a course
              </p>
              <Link to="/courses">
                <Button>Browse Courses</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollments.map((enrollment, index) => (
              <motion.div
                key={enrollment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden card-hover h-full">
                  <div className="relative">
                    <img
                      src={enrollment.courses?.image_url || "/placeholder.svg"}
                      alt={enrollment.courses?.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 right-3">
                      {enrollment.courses?.level}
                    </Badge>
                    {enrollment.progress === 100 && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Completed
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2">
                      {enrollment.courses?.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {enrollment.courses?.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {enrollment.courses?.duration}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{enrollment.progress}%</span>
                      </div>
                      <Progress value={enrollment.progress} />
                    </div>

                    <Link to={`/student/courses/${enrollment.courses?.id}`}>
                      <Button className="w-full">
                        <PlayCircle className="h-4 w-4 mr-2" />
                        {enrollment.progress > 0 ? "Continue Learning" : "Start Course"}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </StudentLayout>
  );
}
