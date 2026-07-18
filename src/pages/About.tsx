import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Users, Award, BookOpen, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: BookOpen,
    title: "Authentic Teaching",
    description: "We follow traditional Islamic teaching methods with certified teachers who hold Ijazah.",
  },
  {
    icon: Heart,
    title: "Compassionate Learning",
    description: "Our teachers create a nurturing environment where every student feels valued and supported.",
  },
  {
    icon: Users,
    title: "Personalized Attention",
    description: "One-on-one classes ensure each student receives individual attention for optimal learning.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Learn from anywhere in the world with our 24/7 availability across all time zones.",
  },
];

const stats = [
  { value: "5,000+", label: "Students Taught" },
  { value: "50+", label: "Certified Teachers" },
  { value: "15+", label: "Years Experience" },
  { value: "40+", label: "Countries Reached" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Mushaf Al Noor Online Quran Academy</title>
        <meta name="description" content="Learn about Mushaf Al Noor Online Quran Academy's mission to provide authentic Quran education worldwide. Discover our values, vision, and dedicated team." />
        <link rel="canonical" href="https://mushafalnoor.com/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-20" />
            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center"
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  About Us
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Illuminating Hearts Through <span className="gradient-text">Quran Education</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Mushaf Al Noor is dedicated to making quality Quran education accessible to Muslims
                  around the world, regardless of their location or schedule.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Our Story */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1585036156171-384164a8c675?w=800&q=80"
                    alt="Quran learning"
                    className="rounded-2xl shadow-large"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
                    Our Story
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    A Journey of Faith & Education
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Founded with a vision to spread the light of Quranic knowledge, Mushaf Al Noor has grown
                    from a small initiative to a globally recognized online Quran academy serving students
                    in over 40 countries.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our name "Mushaf Al Noor" means "The Illuminated Quran" - reflecting our commitment to
                    helping students not just read the Quran, but truly understand and embody its teachings.
                  </p>
                  <p className="text-muted-foreground">
                    We believe that every Muslim deserves access to qualified Quran teachers, regardless of
                    where they live. That's why we've built a platform that brings the best teachers directly
                    to your home.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="section-padding bg-secondary/30">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-2xl p-8 shadow-soft"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide authentic, accessible, and personalized Quran education to Muslims worldwide,
                    nurturing a generation of Quran-connected individuals who can recite beautifully,
                    understand deeply, and live by its teachings.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-soft"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <Award className="w-7 h-7 text-gold-dark" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the world's most trusted online Quran academy, known for excellence in teaching,
                    student care, and producing graduates who carry the Quran in their hearts and actions.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="section-padding">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Values
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What We Stand For
                </h2>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-soft card-hover text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 bg-primary">
            <div className="container-custom">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <p className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                      {stat.value}
                    </p>
                    <p className="text-primary-foreground/80">{stat.label}</p>
                  </motion.div>
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
