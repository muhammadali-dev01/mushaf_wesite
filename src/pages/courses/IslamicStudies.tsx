import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function IslamicStudies() {
  return (
    <>
      <Helmet>
        <title>Islamic Studies for Kids | Fun Islamic Education - Mushaf Al Noor</title>
        <meta name="description" content="Engaging Islamic education for children. Learn Duas, Surahs, Prophet stories, and Islamic values. Fun and interactive online Islamic studies classes." />
        <link rel="canonical" href="https://mushafalnoor.com/courses/islamic-studies" />
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
                    Kids (Ages 5-12)
                  </span>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Islamic Studies <span className="gradient-text">for Kids</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Fun and engaging Islamic education covering essential Duas, Surahs, Prophet stories, moral values, and Islamic etiquette in an age-appropriate manner.
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm"><strong>Duration:</strong> Ongoing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm"><strong>Students:</strong> 900+</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-gold fill-gold" />
                      <span className="text-sm"><strong>Rating:</strong> 4.9/5</span>
                    </div>
                  </div>
                  <Link to="/free-trial">
                    <Button size="xl" className="bg-primary hover:bg-primary/90">
                      Enroll Your Child Today
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
                    alt="Islamic Studies for Kids"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* What Kids Will Learn */}
          <section className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What Your Child Will Learn
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive Islamic education designed to nurture young hearts and minds
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    title: "Essential Duas", 
                    description: "Daily supplications for morning, evening, eating, sleeping, and more",
                    icon: "🤲"
                  },
                  { 
                    title: "Short Surahs", 
                    description: "Memorize and understand short surahs from Juz Amma",
                    icon: "📖"
                  },
                  { 
                    title: "Prophet Stories", 
                    description: "Inspiring stories of prophets and their teachings",
                    icon: "⭐"
                  },
                  { 
                    title: "Islamic Manners", 
                    description: "Beautiful etiquette and manners taught by Islam",
                    icon: "🌟"
                  },
                  { 
                    title: "Five Pillars", 
                    description: "Understanding the fundamental pillars of Islam",
                    icon: "🕌"
                  },
                  { 
                    title: "Moral Values", 
                    description: "Honesty, kindness, respect, and other Islamic values",
                    icon: "💝"
                  },
                  { 
                    title: "Prophets & Sahaba", 
                    description: "Learn about beloved Prophet Muhammad ﷺ and his companions",
                    icon: "✨"
                  },
                  { 
                    title: "Islamic Months", 
                    description: "Significance of Ramadan, Dhul Hijjah, and other holy months",
                    icon: "🌙"
                  },
                  { 
                    title: "Fun Activities", 
                    description: "Interactive games, quizzes, and creative projects",
                    icon: "🎨"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-soft"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Parents Choose Us */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why Parents Love Our Program
                  </h2>
                  <div className="space-y-4">
                    {[
                      "Female teachers available for girls",
                      "Patient and caring instructors experienced with children",
                      "Interactive and engaging teaching methods",
                      "Age-appropriate content and activities",
                      "Regular progress updates to parents",
                      "Flexible scheduling around school hours",
                      "Safe and monitored online environment",
                      "Builds strong Islamic foundation from young age",
                    ].map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
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
                  <Sparkles className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Our Teaching Approach
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We make Islamic education fun and memorable for children through:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Storytelling and visual aids",
                      "Interactive games and quizzes",
                      "Songs and rhymes for memorization",
                      "Coloring and creative activities",
                      "Role-playing and practical examples",
                      "Positive reinforcement and rewards",
                    ].map((method, index) => (
                      <li key={method} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{method}</span>
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
                Give Your Child the Gift of Islamic Knowledge
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Enroll in our fun and engaging Islamic Studies program designed especially for young learners.
              </p>
              <Link to="/free-trial">
                <Button variant="hero-gold" size="xl">
                  Start Free Trial Class
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
