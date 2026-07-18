import { motion } from "framer-motion";
import { UserPlus, Calendar, Video, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register for Free Trial",
    description: "Sign up and book your free trial class. No payment required to get started.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Choose Your Schedule",
    description: "Select convenient time slots and your preferred teacher (male/female).",
  },
  {
    icon: Video,
    step: "03",
    title: "Start Learning",
    description: "Join live 1-on-1 classes via Zoom or Skype from anywhere in the world.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Track Progress",
    description: "Receive regular assessments and monthly progress reports.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="islamic-pattern w-full h-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Start Your Quran Journey in 4 Simple Steps
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Getting started with Mushaf Al Noor is easy. Follow these simple steps
            to begin your Quran learning journey today.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary mb-6 shadow-primary">
                  <item.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                {/* Step Badge */}
                <div className="absolute top-0 right-1/2 translate-x-12 -translate-y-2 bg-gold text-foreground text-xs font-bold px-2.5 py-1 rounded-full">
                  Step {item.step}
                </div>

                <h3 className="font-heading font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
