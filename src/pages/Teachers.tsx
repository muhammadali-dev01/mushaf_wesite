import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Award, BookOpen, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

import maleTeacher1 from "@/assets/teachers/male-teacher-1.jpg";
import femaleTeacher1 from "@/assets/teachers/female-teacher-1.jpg";
import maleTeacher2 from "@/assets/teachers/male-teacher-2.jpg";
import femaleTeacher2 from "@/assets/teachers/female-teacher-2.jpg";
import maleTeacher3 from "@/assets/teachers/male-teacher-3.jpg";
import femaleTeacher3 from "@/assets/teachers/female-teacher-3.jpg";

const teachers = [
  {
    id: 1,
    name: "Sheikh Abdullah Malik",
    specialization: "Tajweed & Hifz Expert",
    experience: "15+ years",
    students: "500+",
    rating: 4.9,
    image: maleTeacher1,
    certifications: ["Ijazah in Quran", "Islamic Studies Degree"],
    bio: "Sheikh Abdullah has dedicated his life to teaching the Quran. With over 15 years of experience, he has helped hundreds of students complete their Hifz journey.",
  },
  {
    id: 2,
    name: "Ustaza Maryam Ahmed",
    specialization: "Female Quran Teacher",
    experience: "10+ years",
    students: "400+",
    rating: 4.9,
    image: femaleTeacher1,
    certifications: ["Ijazah in Quran", "Arabic Language Expert"],
    bio: "Ustaza Maryam specializes in teaching female students and children. Her patient and nurturing approach has made her one of our most requested teachers.",
  },
  {
    id: 3,
    name: "Qari Hassan Omar",
    specialization: "Qiraat & Tajweed",
    experience: "12+ years",
    students: "350+",
    rating: 4.8,
    image: maleTeacher2,
    certifications: ["Ijazah in 10 Qiraat", "Tajweed Master"],
    bio: "Qari Hassan is an expert in the 10 different styles of Quran recitation. He brings a unique depth to Tajweed teaching with his extensive knowledge.",
  },
  {
    id: 4,
    name: "Ustaza Fatima Khan",
    specialization: "Kids & Beginners",
    experience: "8+ years",
    students: "600+",
    rating: 4.9,
    image: femaleTeacher2,
    certifications: ["Ijazah in Quran", "Child Education Certified"],
    bio: "Ustaza Fatima has a special gift for teaching young children. Her creative and engaging methods help kids develop a love for the Quran.",
  },
  {
    id: 5,
    name: "Sheikh Yusuf Rahman",
    specialization: "Tafseer & Translation",
    experience: "20+ years",
    students: "300+",
    rating: 4.9,
    image: maleTeacher3,
    certifications: ["PhD in Islamic Studies", "Ijazah in Quran"],
    bio: "Sheikh Yusuf brings scholarly depth to Quran study with his extensive knowledge of Tafseer and classical Arabic. Perfect for advanced students.",
  },
  {
    id: 6,
    name: "Ustaza Aisha Mahmood",
    specialization: "Noorani Qaida & Tajweed",
    experience: "7+ years",
    students: "450+",
    rating: 4.8,
    image: femaleTeacher3,
    certifications: ["Ijazah in Quran", "Teaching Certification"],
    bio: "Ustaza Aisha specializes in teaching beginners the fundamentals. Her step-by-step approach ensures a strong foundation in Quran reading.",
  },
];

export default function Teachers() {
  return (
    <>
      <Helmet>
        <title>Our Teachers | Certified Quran Teachers - Mushaf Al Noor</title>
        <meta name="description" content="Meet our certified Quran teachers. Expert male and female tutors with Ijazah certification. Learn from experienced professionals online." />
        <link rel="canonical" href="https://mushafalnoor.com/teachers" />
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
                  Our Teachers
                </span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Learn from <span className="gradient-text">Certified Experts</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Our teachers hold Ijazah certification and have years of experience teaching
                  students of all ages and backgrounds. Choose from our team of dedicated educators.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Teachers Grid */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teachers.map((teacher, index) => (
                  <motion.div
                    key={teacher.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <article className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover h-full">
                      {/* Image */}
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                          <span className="text-sm font-semibold">{teacher.rating}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                          {teacher.name}
                        </h3>
                        <p className="text-primary font-medium text-sm mb-3">
                          {teacher.specialization}
                        </p>
                        <p className="text-muted-foreground text-sm mb-4">
                          {teacher.bio}
                        </p>

                        {/* Stats */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Award className="w-4 h-4" />
                            {teacher.experience}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            {teacher.students} students
                          </span>
                        </div>

                        {/* Certifications */}
                        <div className="flex flex-wrap gap-2">
                          {teacher.certifications.map((cert) => (
                            <span
                              key={cert}
                              className="text-xs px-2.5 py-1 bg-secondary rounded-full text-secondary-foreground"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Start Learning?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Book a free trial class and we'll match you with the perfect teacher based on your
                learning goals and preferences.
              </p>
              <Link to="/free-trial">
                <Button variant="hero-gold" size="xl">
                  Book Free Trial
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
