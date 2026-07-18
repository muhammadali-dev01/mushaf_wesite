import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Chatbot } from "@/components/Chatbot";
import { ScrollToTop } from "@/components/ScrollToTop";

// Public pages
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FreeTrial from "./pages/FreeTrial";
import Teachers from "./pages/Teachers";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import HowItWorks from "./pages/HowItWorks";
import Testimonials from "./pages/Testimonials";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Auth from "./pages/Auth";

// Course pages
import NooraniQaida from "./pages/courses/NooraniQaida";
import Tajweed from "./pages/courses/Tajweed";
import Hifz from "./pages/courses/Hifz";
import Translation from "./pages/courses/Translation";
import IslamicStudies from "./pages/courses/IslamicStudies";

// Student pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentCourses from "./pages/student/Courses";
import StudentSettings from "./pages/student/Settings";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCourses from "./pages/admin/Courses";
import AdminEnrollments from "./pages/admin/Enrollments";
import AdminStudents from "./pages/admin/Students";
import AdminTeachers from "./pages/admin/Teachers";
import AdminBlog from "./pages/admin/Blog";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <title>Mushaf Al Noor Online Quran Academy</title>
      <meta name="description" content="Professional Online Quran Learning Platform for Kids and Adults Worldwide." />
      <meta name="author" content="Mushaf Al Noor Team" />
      <meta property="og:title" content="Mushaf Al Noor Online Quran Academy" />
      <meta property="og:description" content="Professional Online Quran Learning Platform for Kids and Adults Worldwide." />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Mushaf Al Noor Online Quran Academy" />
      <meta property="og:image" content="https://mushafalnoor.com/favicon.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Mushaf Al Noor Online Quran Academy" />
      <meta name="twitter:description" content="Professional Online Quran Learning Platform for Kids and Adults Worldwide." />
      <meta name="twitter:image" content="https://mushafalnoor.com/favicon.png" />
      <link rel="canonical" href="https://mushafalnoor.com" />
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/noorani-qaida" element={<NooraniQaida />} />
            <Route path="/courses/tajweed" element={<Tajweed />} />
            <Route path="/courses/hifz" element={<Hifz />} />
            <Route path="/courses/translation" element={<Translation />} />
            <Route path="/courses/tafseer" element={<NooraniQaida />} />
            <Route path="/courses/islamic-studies" element={<IslamicStudies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/auth" element={<Auth />} />

            {/* Student routes */}
            <Route path="/student/dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
            <Route path="/student/courses" element={<ProtectedRoute><StudentCourses /></ProtectedRoute>} />
            <Route path="/student/settings" element={<ProtectedRoute><StudentSettings /></ProtectedRoute>} />

            {/* Admin routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
            <Route path="/admin/courses" element={<ProtectedRoute requireAdmin><AdminCourses /></ProtectedRoute>} />
            <Route path="/admin/enrollments" element={<ProtectedRoute requireAdmin><AdminEnrollments /></ProtectedRoute>} />
            <Route path="/admin/students" element={<ProtectedRoute requireAdmin><AdminStudents /></ProtectedRoute>} />
            <Route path="/admin/teachers" element={<ProtectedRoute requireAdmin><AdminTeachers /></ProtectedRoute>} />
            <Route path="/admin/blog" element={<ProtectedRoute requireAdmin><AdminBlog /></ProtectedRoute>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Chatbot />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
