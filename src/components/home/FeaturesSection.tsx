import { motion } from "framer-motion";
import { 
  Video, 
  Users, 
  Clock, 
  Award, 
  Globe, 
  Calendar,
  Shield,
  Headphones
} from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Live 1-on-1 Classes",
    description: "Personalized attention with dedicated teachers for effective learning.",
  },
  {
    icon: Users,
    title: "Male & Female Teachers",
    description: "Choose from certified male or female Quran teachers based on your preference.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Learn at your convenience with 24/7 availability across all time zones.",
  },
  {
    icon: Award,
    title: "Certified Teachers",
    description: "All teachers hold Ijazah certification with years of teaching experience.",
  },
  {
    icon: Globe,
    title: "Learn from Anywhere",
    description: "Connect from any location worldwide with just an internet connection.",
  },
  {
    icon: Calendar,
    title: "Progress Tracking",
    description: "Regular assessments and monthly progress reports for parents.",
  },
  {
    icon: Shield,
    title: "Safe Learning Environment",
    description: "Secure platform with recorded sessions for parent monitoring.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team available around the clock for assistance.",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Best Online Quran Learning Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a complete Islamic education solution with modern teaching methods
            and traditional values.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-soft card-hover text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
