import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
const testimonials = [{
  id: 1,
  name: "Sarah Ahmed",
  role: "Parent from USA",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
  rating: 5,
  text: "My children have been learning Quran with Mushaf Al Noor for over a year now. The teachers are incredibly patient and my kids have made amazing progress. The flexible scheduling works perfectly for our busy family."
}, {
  id: 2,
  name: "Muhammad Hassan",
  role: "Student from UK",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
  rating: 5,
  text: "I started with zero knowledge of Arabic and now I can read Quran fluently with Tajweed. The Noorani Qaida course was the perfect foundation. My teacher made learning enjoyable and easy to understand."
}, {
  id: 3,
  name: "Fatima Khan",
  role: "Parent from Canada",
  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
  rating: 5,
  text: "The female teacher option was very important for our family. My daughter feels comfortable and has developed a love for the Quran. The monthly progress reports help us track her improvement."
}, {
  id: 4,
  name: "Ahmed Ali",
  role: "Hifz Student from Australia",
  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
  rating: 5,
  text: "I'm halfway through my Hifz journey with Mushaf Al Noor. The structured approach and regular revision sessions have made memorization much more manageable. Highly recommend their Hifz program!"
}, {
  id: 5,
  name: "Aisha Rahman",
  role: "Adult Learner from Germany",
  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
  rating: 5,
  text: "It's never too late to learn! At 45, I finally learned to read Quran properly. The teachers are respectful and understanding. The translation course helped me connect with the meaning of what I recite."
}];
export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return <section className="section-padding bg-primary/5 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 islamic-pattern opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
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
      }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-primary rounded-full text-sm font-medium mb-4 bg-black">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied students and parents who have transformed their
            Quran learning experience with us.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div key={currentIndex} initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} exit={{
              opacity: 0,
              x: -50
            }} transition={{
              duration: 0.4
            }} className="bg-card rounded-3xl p-8 md:p-12 shadow-large">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-primary/20 mb-6" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-14 h-14 rounded-full object-cover" loading="lazy" />
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full" aria-label="Previous testimonial">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"}`} aria-label={`Go to testimonial ${index + 1}`} />)}
              </div>

              <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full" aria-label="Next testimonial">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}