import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const features = [
  "Arabic alphabet recognition and pronunciation",
  "Letter combinations (Haroof Muqatta'at)",
  "Basic Tajweed rules introduction",
  "Reading practice with simple words",
  "Progress tracking and assessments",
  "Interactive learning materials",
];

const curriculum = [
  { title: "Module 1: Arabic Letters", lessons: "Recognition of all 29 letters" },
  { title: "Module 2: Letter Forms", lessons: "Beginning, middle, and end forms" },
  { title: "Module 3: Vowel Marks", lessons: "Fatha, Kasra, Damma" },
  { title: "Module 4: Sukoon & Tanween", lessons: "Silent letters and double vowels" },
  { title: "Module 5: Madd (Elongation)", lessons: "Stretching sounds properly" },
  { title: "Module 6: Practice", lessons: "Reading simple Quranic words" },
];

export default function NooraniQaida() {
  return (
    <>
      <Helmet>
        <title>Noorani Qaida Course | Learn Quran Reading - Mushaf Al Noor</title>
        <meta name="description" content="Master Quran reading basics with our Noorani Qaida course. Perfect for beginners. Learn Arabic letters, pronunciation, and basic Tajweed rules online." />
        <link rel="canonical" href="https://mushafalnoor.com/courses/noorani-qaida" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Beginner Course
                  </span>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Noorani Qaida
                  </h1>
                  <p className="text-lg text-muted-foreground mb-6">
                    The perfect foundation course for beginners. Learn Arabic letters, pronunciation, and basic Quran reading rules step by step with our expert teachers.
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">3-6 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">1,200+ students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-gold fill-gold" />
                      <span className="text-sm font-semibold">4.9</span>
                    </div>
                  </div>
                  <Link to="/free-trial">
                    <Button variant="hero" size="xl">Book Free Trial</Button>
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
                  <img src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800&q=80" alt="Noorani Qaida" className="rounded-2xl shadow-large" />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="section-padding">
            <div className="container-custom">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-padding bg-secondary/30">
            <div className="container-custom">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Course Curriculum</h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {curriculum.map((module, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                    <div className="flex items-center gap-3 mb-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      <h3 className="font-heading font-semibold text-foreground">{module.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{module.lessons}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
