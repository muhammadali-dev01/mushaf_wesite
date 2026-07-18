import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I start learning Quran online with Mushaf Al Noor?",
        answer: "Starting is easy! Simply book a free trial class through our website. We'll assess your current level and recommend the best course for you. Once you're satisfied, choose a convenient schedule and begin your journey with one of our certified teachers.",
      },
      {
        question: "What equipment do I need for online classes?",
        answer: "You need a device (computer, tablet, or smartphone) with a stable internet connection, a webcam, and a microphone. Classes are conducted via Zoom or Skype. We'll provide guidance on setting up before your first class.",
      },
      {
        question: "What age groups do you teach?",
        answer: "We teach students of all ages - from children as young as 4 years old to adults. Our teachers are trained to adapt their teaching methods according to the student's age and learning style.",
      },
    ],
  },
  {
    title: "Teachers & Classes",
    faqs: [
      {
        question: "Do you have female Quran teachers available?",
        answer: "Yes, we have a team of qualified female Quran teachers who hold Ijazah certification. You can request a female teacher when registering, and we'll match you with the best available instructor.",
      },
      {
        question: "Are your teachers certified?",
        answer: "Yes, all our teachers hold Ijazah (authorization to teach Quran) from recognized Islamic institutions. They have years of teaching experience and undergo regular training to maintain high teaching standards.",
      },
      {
        question: "Can I change my teacher if needed?",
        answer: "Absolutely! If you feel that another teacher might be a better fit, simply contact our support team and we'll arrange a change. Your comfort and learning progress are our priorities.",
      },
    ],
  },
  {
    title: "Scheduling & Duration",
    faqs: [
      {
        question: "What are your class timings?",
        answer: "We offer classes 24/7 to accommodate students from all time zones. During registration, you can select your preferred time slots. We have teachers available around the clock.",
      },
      {
        question: "How long does each class last?",
        answer: "Class duration depends on your plan: Basic (30 minutes), Standard (30 minutes), and Premium (45 minutes). Longer sessions are available upon request.",
      },
      {
        question: "How long does it take to complete the Quran?",
        answer: "Duration varies by course: Noorani Qaida (3-6 months), Full Quran with Tajweed (1-2 years), Hifz Program (2-4 years). Actual time depends on individual dedication and practice.",
      },
    ],
  },
  {
    title: "Payment & Pricing",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards, PayPal, and bank transfers. Payment plans are available for long-term courses. Contact us for details about pricing in your currency.",
      },
      {
        question: "Do you offer family discounts?",
        answer: "Yes! We offer 10% off for 2 family members, 15% off for 3, and 20% off for 4 or more family members enrolling together.",
      },
      {
        question: "Is there a refund policy?",
        answer: "We offer a satisfaction guarantee. If you're not happy with our service within the first week, we'll provide a full refund. After that, refunds are prorated based on unused classes.",
      },
    ],
  },
  {
    title: "Progress & Support",
    faqs: [
      {
        question: "Do you provide progress reports?",
        answer: "Yes, we provide regular progress reports to parents and students. These include attendance, lesson completion, areas of improvement, and teacher feedback.",
      },
      {
        question: "What if I miss a class?",
        answer: "We understand that life happens. You can reschedule missed classes with at least 24 hours notice. Emergency situations are handled on a case-by-case basis.",
      },
      {
        question: "How can I contact support?",
        answer: "Our support team is available 24/7 via email (info@mushafalnoor.com), phone, or WhatsApp. We typically respond within a few hours.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Mushaf Al Noor Online Quran Academy</title>
        <meta name="description" content="Find answers to common questions about online Quran classes, teachers, pricing, scheduling, and more at Mushaf Al Noor Academy." />
        <link rel="canonical" href="https://mushafalnoor.com/faq" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category => 
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
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
                  FAQ
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Frequently Asked <span className="gradient-text">Questions</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Find answers to common questions about our online Quran classes.
                  Can't find what you're looking for? Contact our support team.
                </p>
              </motion.div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="mb-12"
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.title}-${index}`}
                        className="bg-card rounded-xl border-none shadow-soft px-6 data-[state=open]:shadow-medium transition-shadow"
                      >
                        <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-secondary/30">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Contact us anytime and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Contact Support
                  </Button>
                </Link>
                <Link to="/free-trial">
                  <Button variant="hero-outline" size="lg">
                    Book Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
