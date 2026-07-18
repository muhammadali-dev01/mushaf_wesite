import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function Tajweed() {
  return (
    <>
      <Helmet>
        <title>Quran Reading with Tajweed | Learn Proper Quran Recitation - Mushaf Al Noor</title>
        <meta name="description" content="Master Quran recitation with proper Tajweed rules. Learn pronunciation, rhythm, and melody from certified teachers. Online Tajweed classes for all levels." />
        <link rel="canonical" href="https://mushafalnoor.com/courses/tajweed" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-20" />
            <div className="container-custom relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Intermediate Level
                  </span>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Quran Reading with <span className="gradient-text">Tajweed</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Master the art of beautiful Quran recitation with proper Tajweed rules. Perfect your pronunciation, rhythm, and melody under expert guidance.
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm"><strong>Duration:</strong> 6-12 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm"><strong>Students:</strong> 2,000+</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-gold fill-gold" />
                      <span className="text-sm"><strong>Rating:</strong> 4.9/5</span>
                    </div>
                  </div>
                  <Link to="/free-trial">
                    <Button size="xl" className="bg-primary hover:bg-primary/90">
                      Book Free Trial Class
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=800&q=80"
                    alt="Quran with Tajweed"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* What You'll Learn */}
          <section className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What You'll Learn
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive Tajweed curriculum covering all essential rules for perfect Quran recitation
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Makharij al-Huruf", description: "Master the articulation points of every Arabic letter" },
                  { title: "Sifaat al-Huruf", description: "Learn the characteristics and qualities of letters" },
                  { title: "Noon Sakinah Rules", description: "Understand Izhar, Idgham, Iqlab, and Ikhfa" },
                  { title: "Meem Sakinah Rules", description: "Learn the three rules of Meem Sakinah" },
                  { title: "Qalqalah", description: "Perfect the echoing sound in specific letters" },
                  { title: "Madd (Elongation)", description: "Master different types of elongation in recitation" },
                  { title: "Ghunnah", description: "Learn the nasal sound rules" },
                  { title: "Waqf (Stopping)", description: "Understand when and how to stop while reciting" },
                  { title: "Practical Application", description: "Apply all rules in actual Quran recitation" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-soft"
                  >
                    <CheckCircle className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Course Features */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why Choose Our Tajweed Course?
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Certified teachers with Ijazah in Tajweed",
                      "One-on-one personalized instruction",
                      "Flexible scheduling to fit your routine",
                      "Interactive audio and visual learning",
                      "Regular assessments and feedback",
                      "Practice recordings and corrections",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-8 shadow-soft"
                >
                  <BookOpen className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                    Course Structure
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                        1
                      </div>
                      <span>Foundation: Letters and articulation points</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                        2
                      </div>
                      <span>Core Rules: Noon, Meem, Tanween</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                        3
                      </div>
                      <span>Advanced: Madd, Waqf, and special rules</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                        4
                      </div>
                      <span>Practice: Recitation with perfect Tajweed</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Start Your Tajweed Journey Today
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join thousands of students who have perfected their Quran recitation with our expert teachers.
              </p>
              <Link to="/free-trial">
                <Button variant="hero-gold" size="xl">
                  Book Your Free Trial Class
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
