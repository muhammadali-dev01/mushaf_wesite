import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Star, Users, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import teacherImage from "@/assets/teacher.jpg";

const stats = [
  { icon: Users, value: "2,000+", label: "Students Worldwide" },
  { icon: BookOpen, value: "50+", label: "Expert Teachers" },
  { icon: Award, value: "15+", label: "Years Experience" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="absolute inset-0 islamic-pattern opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-sm font-medium text-foreground">
                Trusted by 5,000+ Students Worldwide
              </span>
            </motion.div>

            {/* Arabic Calligraphy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-arabic text-2xl md:text-3xl text-primary mb-4"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Learn Quran Online with{" "}
              <span className="gradient-text">Expert Teachers</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Join thousands of students worldwide learning Quran with proper Tajweed. 
              One-on-one classes with certified male and female teachers, available 24/7.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Link to="/free-trial">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Play className="w-5 h-5" />
                  Explore Courses
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="font-heading font-bold text-2xl text-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Image Card */}
              <div className="relative bg-card rounded-3xl shadow-large overflow-hidden">
                <img
                  src={teacherImage}
                  alt="Professional Muslim teacher from Mushaf Al Noor Academy"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                  loading="eager"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-medium">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">
                        Live 1-on-1 Classes
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Personalized attention for faster learning
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card - Reviews */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-large hidden md:block"
              >
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground">4.9/5 Rating</p>
                <p className="text-xs text-muted-foreground">2,500+ Reviews</p>
              </motion.div>

              {/* Floating Card - Students */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 bg-primary rounded-2xl p-4 shadow-primary hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary flex items-center justify-center"
                      >
                        <span className="text-xs font-bold text-primary-foreground">
                          {i}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-foreground">
                      +50 Students
                    </p>
                    <p className="text-xs text-primary-foreground/80">
                      Joined this week
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
