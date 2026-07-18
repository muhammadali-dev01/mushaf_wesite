import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, User, Mail, Phone, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { submitForm } from "@/lib/formSubmission";

const benefits = [
  "No credit card required",
  "30-minute live class with certified teacher",
  "Assessment of your current level",
  "Personalized course recommendations",
  "Choose male or female teacher",
  "Flexible scheduling - pick your time",
];

const courses = [
  "Noorani Qaida (Beginners)",
  "Quran Reading with Tajweed",
  "Hifz Program (Memorization)",
  "Quran with Translation",
  "Quran with Tafseer",
  "Islamic Studies for Kids",
];

export default function FreeTrial() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const ageRaw = data.get("age");
    try {
      await submitForm({
        form_type: "free_trial",
        name: (data.get("studentName") as string) || null,
        age: ageRaw ? Number(ageRaw) : null,
        email: (data.get("email") as string) || null,
        phone: (data.get("phone") as string) || null,
        course: (data.get("course") as string) || null,
        teacher_preference: (data.get("teacherPreference") as string) || null,
        timezone: (data.get("timezone") as string) || null,
      });
      toast({
        title: "Trial Booked Successfully!",
        description: "Your booking was saved and WhatsApp is opening to confirm.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Submission failed",
        description: err instanceof Error ? err.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Free Trial Class | Mushaf Al Noor - Try Online Quran Classes Free</title>
        <meta name="description" content="Book your free trial Quran class today. No payment required. Experience personalized 1-on-1 learning with our certified teachers." />
        <link rel="canonical" href="https://mushafalnoor.com/free-trial" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
            <div className="absolute inset-0 islamic-pattern opacity-20" />
            <div className="container-custom relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center"
              >
                <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
                  Free Trial
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                  Start Your <span className="gradient-text">Free Trial</span> Today
                </h1>
                <p className="text-base md:text-lg text-muted-foreground">
                  Experience our teaching quality with a complimentary 30-minute class.
                  No payment required - just fill out the form and we'll schedule your session.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Form Section */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    What's Included in Your Free Trial
                  </h2>
                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/5 rounded-2xl p-5 sm:p-6">
                    <h3 className="font-heading font-semibold text-foreground mb-4">
                      How It Works
                    </h3>
                    <ol className="space-y-4">
                      <li className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                          1
                        </span>
                        <div>
                          <p className="font-medium text-foreground">Fill the Form</p>
                          <p className="text-sm text-muted-foreground">
                            Provide your details and preferred time slot
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                          2
                        </span>
                        <div>
                          <p className="font-medium text-foreground">Get Confirmation</p>
                          <p className="text-sm text-muted-foreground">
                            Our team will contact you within 24 hours
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                          3
                        </span>
                        <div>
                          <p className="font-medium text-foreground">Attend Your Class</p>
                          <p className="text-sm text-muted-foreground">
                            Join via Zoom/Skype and start learning
                          </p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </motion.div>

                {/* Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-2xl p-5 sm:p-8 shadow-large">
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Book Your Free Class
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="studentName" className="block text-sm font-medium text-foreground mb-2">
                            <User className="w-4 h-4 inline mr-1" />
                            Student Name *
                          </label>
                          <Input
                            id="studentName"
                            name="studentName"
                            required
                            placeholder="Student's full name"
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label htmlFor="age" className="block text-sm font-medium text-foreground mb-2">
                            Student Age *
                          </label>
                          <Input
                            id="age"
                            name="age"
                            type="number"
                            min="4"
                            max="99"
                            required
                            placeholder="Age"
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          <Mail className="w-4 h-4 inline mr-1" />
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          className="bg-background"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          <Phone className="w-4 h-4 inline mr-1" />
                          Phone/WhatsApp *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+1 (234) 567-890"
                          className="bg-background"
                        />
                      </div>

                      <div>
                        <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                          <BookOpen className="w-4 h-4 inline mr-1" />
                          Preferred Course *
                        </label>
                        <Select name="course" required>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            {courses.map((course) => (
                              <SelectItem key={course} value={course}>
                                {course}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="teacherPreference" className="block text-sm font-medium text-foreground mb-2">
                          Teacher Preference *
                        </label>
                        <Select name="teacherPreference" required>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male Teacher</SelectItem>
                            <SelectItem value="female">Female Teacher</SelectItem>
                            <SelectItem value="any">No Preference</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="timezone" className="block text-sm font-medium text-foreground mb-2">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          Your Timezone *
                        </label>
                        <Select name="timezone" required>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="est">Eastern Time (EST)</SelectItem>
                            <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                            <SelectItem value="gmt">GMT (London)</SelectItem>
                            <SelectItem value="cet">Central European (CET)</SelectItem>
                            <SelectItem value="ast">Arabia Standard (AST)</SelectItem>
                            <SelectItem value="pkt">Pakistan (PKT)</SelectItem>
                            <SelectItem value="aest">Australia Eastern (AEST)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="xl"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Booking..." : "Book Free Trial Now"}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        By submitting, you agree to our{" "}
                        <a href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </a>
                      </p>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
