import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, BookOpen, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sheikhAbdullah from "@/assets/teachers/sheikh-abdullah.jpg";
import ustazaMaryam from "@/assets/teachers/ustaza-maryam.jpg";
import qariHassan from "@/assets/teachers/qari-hassan.jpg";
import ustazaFatima from "@/assets/teachers/ustaza-fatima.jpg";
const teachers = [{
  id: 1,
  name: "Sheikh Abdullah Malik",
  specialization: "Tajweed & Hifz Expert",
  experience: "15+ years",
  students: "500+",
  rating: 4.9,
  image: sheikhAbdullah,
  certifications: ["Ijazah in Quran", "Islamic Studies"]
}, {
  id: 2,
  name: "Ustaza Maryam Ahmed",
  specialization: "Female Quran Teacher",
  experience: "10+ years",
  students: "400+",
  rating: 4.9,
  image: ustazaMaryam,
  certifications: ["Ijazah in Quran", "Arabic Language"]
}, {
  id: 3,
  name: "Qari Hassan Omar",
  specialization: "Qiraat & Tajweed",
  experience: "12+ years",
  students: "350+",
  rating: 4.8,
  image: qariHassan,
  certifications: ["Ijazah in 10 Qiraat", "Tajweed Master"]
}, {
  id: 4,
  name: "Ustaza Fatima Khan",
  specialization: "Kids & Beginners",
  experience: "8+ years",
  students: "600+",
  rating: 4.9,
  image: ustazaFatima,
  certifications: ["Ijazah in Quran", "Child Education"]
}];
export function TeachersSection() {
  return <section className="section-padding bg-background">
      <div className="container-custom">
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
          <span className="inline-block px-4 py-1.5 text-primary rounded-full text-sm font-medium mb-4 bg-secondary">
            Our Teachers
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Learn from Certified Quran Teachers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our teachers hold Ijazah certification and have years of experience in
            teaching Quran to students of all ages and backgrounds.
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => <motion.div key={teacher.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover group">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img src={teacher.image} alt={`${teacher.name} - ${teacher.specialization}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    <span className="text-sm font-semibold text-foreground">
                      {teacher.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {teacher.specialization}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4" />
                      {teacher.experience}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4" />
                      {teacher.students} students
                    </span>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2">
                    {teacher.certifications.map(cert => <span key={cert} className="text-xs px-2.5 py-1 bg-secondary rounded-full text-secondary-foreground">
                        {cert}
                      </span>)}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>

        {/* CTA */}
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
        delay: 0.3
      }} className="text-center mt-12">
          <Link to="/teachers">
            <Button variant="hero-outline" size="lg">
              Meet All Teachers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>;
}