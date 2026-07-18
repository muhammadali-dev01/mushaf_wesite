import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Clock, Users, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const courses = [
  {
    id: "noorani-qaida",
    title: "Noorani Qaida",
    description: "The perfect foundation course for beginners. Learn Arabic letters, pronunciation, and basic Quran reading rules step by step.",
    duration: "3-6 months",
    level: "Beginner",
    students: "1,200+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=600&q=80",
    features: ["Arabic Alphabet", "Letter Combinations", "Basic Tajweed", "Reading Practice"],
  },
  {
    id: "tajweed",
    title: "Quran Reading with Tajweed",
    description: "Master the art of beautiful Quran recitation with proper Tajweed rules. Perfect your pronunciation, rhythm, and melody.",
    duration: "6-12 months",
    level: "Intermediate",
    students: "2,000+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=600&q=80",
    features: ["Tajweed Rules", "Makharij (Articulation)", "Sifaat (Characteristics)", "Waqf Rules"],
  },
  {
    id: "hifz",
    title: "Hifz Program",
    description: "Comprehensive Quran memorization program with expert guidance, personalized learning plans, and revision strategies.",
    duration: "2-4 years",
    level: "All Levels",
    students: "800+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579187707643-35646d22b596?w=600&q=80",
    features: ["Structured Memorization", "Daily Revision", "Progress Tracking", "Ijazah Preparation"],
  },
  {
    id: "translation",
    title: "Quran with Translation",
    description: "Understand the meaning of the Quran with word-by-word translation in your preferred language (English, Urdu, Arabic).",
    duration: "6-12 months",
    level: "All Levels",
    students: "1,500+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=600&q=80",
    features: ["Word-by-Word Translation", "Grammar Basics", "Contextual Meaning", "Vocabulary Building"],
  },
  {
    id: "tafseer",
    title: "Quran with Tafseer",
    description: "Deep dive into Quranic interpretation with scholarly explanations, historical context, and practical applications.",
    duration: "12-24 months",
    level: "Advanced",
    students: "600+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?w=600&q=80",
    features: ["Classical Tafseer", "Historical Context", "Scholarly Opinions", "Practical Applications"],
  },
  {
    id: "islamic-studies",
    title: "Islamic Studies for Kids",
    description: "Fun and engaging Islamic education covering Duas, Surahs, Islamic history, moral values, and Prophet stories.",
    duration: "Ongoing",
    level: "Kids (5-12)",
    students: "900+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    features: ["Essential Duas", "Short Surahs", "Prophet Stories", "Islamic Etiquette"],
  },
];

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Quran Courses | Mushaf Al Noor - Tajweed, Hifz, Noorani Qaida Online</title>
        <meta name="description" content="Explore our comprehensive Quran courses: Noorani Qaida, Tajweed, Hifz, Translation, Tafseer, and Islamic Studies. Learn with certified teachers online." />
        <link rel="canonical" href="https://mushafalnoor.com/courses" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Quran Courses",
            "itemListElement": courses.map((course, index) => ({
              "@type": "Course",
              "position": index + 1,
              "name": course.title,
              "description": course.description,
              "provider": {
                "@type": "Organization",
                "name": "Mushaf Al Noor Online Quran Academy"
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-20" />
            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center"
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Courses
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Learn Quran with <span className="gradient-text">Expert Guidance</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Choose from our range of expertly designed courses tailored for all ages and levels.
                  Begin your journey towards Quranic excellence today.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Courses Grid */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <article className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover h-full flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-2/5 h-48 md:h-auto relative">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                          <span className="text-sm font-semibold">{course.rating}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:w-3/5 p-6 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                            {course.level}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {course.duration}
                          </span>
                        </div>

                        <h2 className="font-heading text-xl font-bold text-foreground mb-2">
                          {course.title}
                        </h2>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                          {course.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {course.features.map((feature) => (
                            <span key={feature} className="text-xs text-muted-foreground flex items-center gap-1">
                              <CheckCircle className="w-3 h-3 text-primary" />
                              {feature}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {course.students} students
                          </span>
                          <Link to={`/courses/${course.id}`}>
                            <Button variant="ghost" size="sm">
                              Learn More <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Not Sure Which Course to Choose?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Book a free trial class and our team will help you find the perfect course based on your
                current level and learning goals.
              </p>
              <Link to="/free-trial">
                <Button variant="hero-gold" size="xl">
                  Book Free Trial
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
