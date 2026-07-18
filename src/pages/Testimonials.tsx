import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Helmet } from "react-helmet-async";

export default function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Student Testimonials | Mushaf Al Noor Reviews</title>
        <meta name="description" content="Read reviews from our satisfied students and parents. See why thousands trust Mushaf Al Noor for online Quran education." />
        <link rel="canonical" href="https://mushafalnoor.com/testimonials" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container-custom text-center">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Student <span className="gradient-text">Reviews</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. See what our students and parents say about their experience with Mushaf Al Noor.
              </p>
            </div>
          </section>
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
