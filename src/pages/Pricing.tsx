import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners starting their Quran journey",
    price: 50,
    period: "month",
    sessions: "8 sessions/month",
    features: [
      "2 classes per week",
      "30 minutes per session",
      "Certified teacher",
      "Monthly progress report",
      "Basic course materials",
    ],
    popular: false,
  },
  {
    name: "Standard",
    description: "Most popular choice for consistent learning",
    price: 80,
    period: "month",
    sessions: "12 sessions/month",
    features: [
      "3 classes per week",
      "30 minutes per session",
      "Certified teacher",
      "Bi-weekly progress reports",
      "Full course materials",
      "Recording of classes",
      "Priority scheduling",
    ],
    popular: true,
  },
  {
    name: "Premium",
    description: "Intensive learning for fast progress",
    price: 120,
    period: "month",
    sessions: "20 sessions/month",
    features: [
      "5 classes per week",
      "45 minutes per session",
      "Senior certified teacher",
      "Weekly progress reports",
      "Full course materials",
      "Recording of classes",
      "Priority scheduling",
      "24/7 teacher support",
      "Personalized curriculum",
    ],
    popular: false,
  },
];

const familyPlans = [
  { members: 2, discount: "10%" },
  { members: 3, discount: "15%" },
  { members: "4+", discount: "20%" },
];

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing Plans | Mushaf Al Noor Online Quran Academy</title>
        <meta name="description" content="Affordable Quran classes starting from $50/month. View our pricing plans for online Quran learning with certified teachers. Family discounts available." />
        <link rel="canonical" href="https://mushafalnoor.com/pricing" />
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
                  Pricing
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Affordable <span className="gradient-text">Quran Education</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Quality Quran education shouldn't break the bank. Choose a plan that fits your
                  budget and learning goals.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Pricing Cards */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative bg-card rounded-2xl p-8 shadow-soft card-hover ${
                      plan.popular ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </div>
                      <p className="text-sm text-primary font-medium mt-2">{plan.sessions}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link to="/free-trial" className="block">
                      <Button
                        variant={plan.popular ? "hero" : "hero-outline"}
                        className="w-full"
                      >
                        Start Free Trial
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Family Discounts */}
          <section className="py-16 bg-secondary/30">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
                    Family Plans
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                    Special Family Discounts
                  </h2>
                  <p className="text-muted-foreground">
                    Learning together is better. Get special discounts when multiple family members enroll.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {familyPlans.map((plan, index) => (
                    <motion.div
                      key={plan.members}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-card rounded-2xl p-6 text-center shadow-soft"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-7 h-7 text-gold-dark" />
                      </div>
                      <p className="font-heading text-3xl font-bold text-foreground mb-2">
                        {plan.discount}
                      </p>
                      <p className="text-muted-foreground">
                        {plan.members} Family Members
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Questions About Pricing?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Contact us for custom plans, corporate packages, or if you need financial assistance.
                  We're here to help make Quran education accessible for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                  <Link to="/faq">
                    <Button variant="hero-outline" size="lg">
                      View FAQ
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
