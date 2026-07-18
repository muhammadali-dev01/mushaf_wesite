import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Clock, Users, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import kidLearningQuran from "@/assets/courses/kid-learning-quran-online.jpg";
import tajweedCourse from "@/assets/courses/tajweed-course.jpg";
import hifzCourse from "@/assets/courses/hifz-course.jpg";
import translationCourse from "@/assets/courses/translation-course.jpg";
import tafseerCourse from "@/assets/courses/tafseer-course.jpg";
import islamicStudiesCourse from "@/assets/courses/islamic-studies-course.jpg";
const courses = [{
  id: "noorani-qaida",
  title: "Noorani Qaida",
  description: "Perfect foundation course for beginners. Learn Arabic letters, pronunciation, and basic Quran reading rules.",
  duration: "3-6 months",
  level: "Beginner",
  students: "1,200+",
  rating: 4.9,
  image: kidLearningQuran,
  color: "from-emerald-500/20 to-emerald-600/5"
}, {
  id: "tajweed",
  title: "Quran Reading with Tajweed",
  description: "Master the art of Quran recitation with proper Tajweed rules. Perfect your pronunciation and rhythm.",
  duration: "6-12 months",
  level: "Intermediate",
  students: "2,000+",
  rating: 4.9,
  image: tajweedCourse,
  color: "from-teal-500/20 to-teal-600/5"
}, {
  id: "hifz",
  title: "Hifz Program",
  description: "Comprehensive Quran memorization program with expert guidance and personalized learning plans.",
  duration: "2-4 years",
  level: "All Levels",
  students: "800+",
  rating: 4.8,
  image: hifzCourse,
  color: "from-cyan-500/20 to-cyan-600/5"
}, {
  id: "translation",
  title: "Quran with Translation",
  description: "Understand the meaning of the Quran with word-by-word translation in your preferred language.",
  duration: "6-12 months",
  level: "All Levels",
  students: "1,500+",
  rating: 4.9,
  image: translationCourse,
  color: "from-green-500/20 to-green-600/5"
}, {
  id: "tafseer",
  title: "Quran with Tafseer",
  description: "Deep dive into Quranic interpretation with scholarly explanations and historical context.",
  duration: "12-24 months",
  level: "Advanced",
  students: "600+",
  rating: 4.8,
  image: tafseerCourse,
  color: "from-emerald-500/20 to-emerald-600/5"
}, {
  id: "islamic-studies",
  title: "Islamic Studies for Kids",
  description: "Fun and engaging Islamic education covering Duas, Surahs, Islamic history, and moral values.",
  duration: "Ongoing",
  level: "Kids (5-12)",
  students: "900+",
  rating: 4.9,
  image: islamicStudiesCourse,
  color: "from-teal-500/20 to-teal-600/5"
}];
export function CoursesSection() {
  return <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
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
          <span className="inline-block px-4 py-1.5 text-primary rounded-full text-sm font-medium mb-4 bg-secondary">
            Our Courses
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Quran Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of expertly designed courses to begin your journey
            of learning the Holy Quran with proper guidance.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => <motion.div key={course.id} initial={{
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
              <Link to={`/courses/${course.id}`} className="group block">
                <article className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${course.color}`} />
                    <img src={course.image} alt={`${course.title} - Online Quran Course`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                      <span className="text-sm font-semibold text-foreground">
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {course.students}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </article>
              </Link>
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
          <Link to="/courses">
            <Button variant="hero-outline" size="lg">
              View All Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>;
}