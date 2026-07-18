import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
export default function Hifz() {
  return <>
      <Helmet>
        <title>Hifz Program | Quran Memorization Course - Mushaf Al Noor</title>
        <meta name="description" content="Complete Quran Hifz program with expert guidance. Structured memorization, daily revision, and Ijazah preparation. Join our successful Hifz students." />
        <link rel="canonical" href="https://mushafalnoor.com/courses/hifz" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-20" />
            <div className="container-custom relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{
                opacity: 0,
                x: -30
              }} animate={{
                opacity: 1,
                x: 0
              }}>
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    All Levels Welcome
                  </span>
                  <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Quran <span className="gradient-text">Hifz Program</span>
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Comprehensive Quran memorization program with expert guidance, personalized learning plans, and proven revision strategies to help you become a Hafiz/Hafiza.
                  </p>
                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm"><strong>Duration:</strong> 2-4 years</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm"><strong>Students:</strong> 800+</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-gold fill-gold" />
                      <span className="text-sm"><strong>Rating:</strong> 4.8/5</span>
                    </div>
                  </div>
                  <Link to="/free-trial">
                    <Button size="xl" className="bg-primary hover:bg-primary/90">
                      Start Your Hifz Journey
                    </Button>
                  </Link>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                x: 30
              }} animate={{
                opacity: 1,
                x: 0
              }} className="relative">
                  <img alt="Quran Hifz" className="rounded-2xl shadow-lg w-full" src="/uploads/9f13ccc9-05b2-4aff-a3b8-0e2d6c7089ce.png" />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Program Features */}
          <section className="section-padding">
            <div className="container-custom">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Hifz Program Features
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A complete system designed to make your memorization journey successful and sustainable
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[{
                icon: Target,
                title: "Personalized Plan",
                description: "Custom memorization schedule based on your pace and availability"
              }, {
                icon: TrendingUp,
                title: "Progress Tracking",
                description: "Monitor your memorization and revision progress in real-time"
              }, {
                icon: CheckCircle,
                title: "Daily Revision",
                description: "Structured revision system to ensure long-term retention"
              }, {
                icon: Star,
                title: "Ijazah Preparation",
                description: "Prepare for Ijazah certification with qualified scholars"
              }].map((item, index) => <motion.div key={item.title} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }} className="bg-card rounded-xl p-6 shadow-soft text-center">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>)}
              </div>
            </div>
          </section>

          {/* Memorization Strategy */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div initial={{
                opacity: 0,
                x: -30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }}>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Our Proven Memorization Strategy
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We use a time-tested methodology that balances new memorization with consistent revision:
                  </p>
                  <div className="space-y-4">
                    {[{
                    stage: "New Lesson",
                    description: "Memorize 1-2 pages of new verses daily"
                  }, {
                    stage: "Sabaq",
                    description: "Review the current lesson being memorized"
                  }, {
                    stage: "Sabqi",
                    description: "Revise the last 20 pages memorized"
                  }, {
                    stage: "Manzil",
                    description: "Weekly revision of entire completed sections"
                  }, {
                    stage: "Test & Assessment",
                    description: "Monthly tests to ensure perfect retention"
                  }].map((item, index) => <div key={item.stage} className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{item.stage}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>)}
                  </div>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                x: 30
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} className="space-y-6">
                  <div className="bg-card rounded-2xl p-8 shadow-soft">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {["One-on-one live sessions with certified Hafiz teachers", "Daily memorization and revision classes", "Tajweed correction during memorization", "Regular assessments and progress reports", "Parent/guardian updates (for younger students)", "Flexible class timings", "Recorded sessions for review", "Access to memorization resources and tools"].map(item => <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>)}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Begin Your Journey to Become a Hafiz
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Join our successful Hifz program and achieve your dream of memorizing the entire Quran.
              </p>
              <Link to="/free-trial">
                <Button variant="hero-gold" size="xl">
                  Book Free Assessment Class
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>;
}