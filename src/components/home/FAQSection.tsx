import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const faqs = [{
  question: "How do I start learning Quran online with Mushaf Al Noor?",
  answer: "Starting is easy! Simply book a free trial class through our website. We'll assess your current level and recommend the best course for you. Once you're satisfied, choose a convenient schedule and begin your journey with one of our certified teachers."
}, {
  question: "Do you have female Quran teachers available?",
  answer: "Yes, we have a team of qualified female Quran teachers who hold Ijazah certification. You can request a female teacher when registering, and we'll match you with the best available instructor for your learning needs."
}, {
  question: "What age groups do you teach?",
  answer: "We teach students of all ages - from children as young as 4 years old to adults. Our teachers are trained to adapt their teaching methods according to the student's age and learning style for the best results."
}, {
  question: "What software do I need for online classes?",
  answer: "You only need a device (computer, tablet, or smartphone) with a stable internet connection. Classes are conducted via Zoom or Skype. We'll provide guidance on setting up before your first class."
}, {
  question: "How long does it take to complete the Quran?",
  answer: "The duration varies based on the course and individual progress. Noorani Qaida typically takes 3-6 months, while completing the full Quran with Tajweed can take 1-2 years. Hifz programs usually take 2-4 years depending on dedication and practice."
}, {
  question: "What are your class timings?",
  answer: "We offer classes 24/7 to accommodate students from all time zones. During registration, you can select your preferred time slots. We have teachers available around the clock to ensure you find a convenient schedule."
}, {
  question: "Do you provide progress reports?",
  answer: "Yes, we provide monthly progress reports to parents and students. These reports include attendance, lesson completion, areas of improvement, and teacher feedback to help track the learning journey."
}, {
  question: "What payment methods do you accept?",
  answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. Payment plans are available for long-term courses. Contact us for details about pricing in your currency."
}];
export function FAQSection() {
  return <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-1.5 text-primary rounded-full text-sm font-medium mb-4 bg-black">
              FAQ
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions about our online Quran classes.
              Can't find what you're looking for? Contact our support team.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Support
              </Button>
            </Link>
          </motion.div>

          {/* Right Column - FAQ Accordion */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border-none shadow-soft px-6 data-[state=open]:shadow-medium transition-shadow">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>;
}