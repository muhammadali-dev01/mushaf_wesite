import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star, Languages, BookText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function Translation() {
  return (
    <>
      <Helmet>
        <title>Quran with Translation | Understand Quran Meaning - Mushaf Al Noor</title>
        <meta name="description" content="Learn Quran with word-by-word translation in English, Urdu, or Arabic. Understand the meaning and context of every verse. Online Quran translation classes." />
        <link rel="canonical" href="https://mushafalnoor.com/courses/translation" />
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
                    All Levels
                  </span>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Quran with <span className="gradient-text">Translation</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Understand the meaning of the Quran with comprehensive word-by-word translation in your preferred language. Connect deeply with the divine message.
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm"><strong>Duration:</strong> 6-12 months</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm"><strong>Students:</strong> 1,500+</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-gold fill-gold" />
                      <span className="text-sm"><strong>Rating:</strong> 4.9/5</span>
                    </div>
                  </div>
                  <Link to="/free-trial">
                    <Button size="xl" className="bg-primary hover:bg-primary/90">
                      Start Learning Today
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&q=80"
                    alt="Quran with Translation"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Available in Multiple Languages
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Learn Quran translation in your preferred language for better understanding
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { lang: "English", desc: "Comprehensive English translation with modern terminology" },
                  { lang: "Urdu", desc: "Classical and contemporary Urdu translations" },
                  { lang: "Arabic", desc: "Classical Arabic tafseer and explanation" },
                ].map((item, index) => (
                  <motion.div
                    key={item.lang}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-soft text-center"
                  >
                    <Languages className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {item.lang}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Word-by-Word Translation", description: "Understand the meaning of every single word" },
                  { title: "Grammar Basics", description: "Learn essential Arabic grammar for better comprehension" },
                  { title: "Contextual Meaning", description: "Understand verses in their historical and linguistic context" },
                  { title: "Vocabulary Building", description: "Build your Quranic vocabulary systematically" },
                  { title: "Thematic Study", description: "Study Quran by themes and topics" },
                  { title: "Practical Application", description: "Apply Quranic teachings in daily life" },
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

          {/* Course Structure */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Course Methodology
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Our translation course is designed to help you truly understand the Quran, not just read it:
                  </p>
                  <div className="space-y-4">
                    {[
                      "Start with basic Arabic vocabulary and grammar",
                      "Learn word-by-word translation of selected verses",
                      "Progress to complete surahs with full comprehension",
                      "Study the context and circumstances of revelation",
                      "Explore different scholarly translations and interpretations",
                      "Apply Quranic guidance to modern life situations",
                    ].map((item, index) => (
                      <div key={item} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground pt-1.5">{item}</p>
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
                  <BookText className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                    What Makes Us Different
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Interactive learning with native Arabic speakers",
                      "Focus on understanding, not just translating",
                      "Learn the 'why' behind each verse",
                      "Cultural and historical context explained",
                      "Multiple translations compared and discussed",
                      "Practical life applications emphasized",
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Understand the Divine Message
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Start your journey to understand the Quran in your own language with our expert teachers.
              </p>
              <Link to="/free-trial">
                <Button variant="hero-gold" size="xl">
                  Book Free Trial Class
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
