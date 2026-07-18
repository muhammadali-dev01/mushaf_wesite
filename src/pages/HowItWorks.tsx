import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works | Mushaf Al Noor Online Quran Academy</title>
        <meta name="description" content="Learn how our online Quran classes work. Simple 4-step process to start learning Quran with certified teachers." />
        <link rel="canonical" href="https://mushafalnoor.com/how-it-works" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container-custom text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                How It <span className="gradient-text">Works</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting started with Mushaf Al Noor is simple. Follow these steps to begin your Quran learning journey.
              </p>
            </div>
          </section>
          <HowItWorksSection />
          <section className="py-16 bg-primary">
            <div className="container-custom text-center">
              <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">
                Ready to Get Started?
              </h2>
              <Link to="/free-trial">
                <Button variant="hero-gold" size="xl">Book Free Trial Now</Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
