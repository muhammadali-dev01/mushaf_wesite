import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { CoursesSection } from "@/components/home/CoursesSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TeachersSection } from "@/components/home/TeachersSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mushaf Al Noor - Online Quran Academy | Learn Quran Online with Expert Teachers</title>
        <meta 
          name="description" 
          content="Join Mushaf Al Noor Online Quran Academy for personalized Quran classes. Learn Quran online with certified male & female teachers. Tajweed, Hifz, Noorani Qaida courses available 24/7." 
        />
        <meta 
          name="keywords" 
          content="Online Quran Classes, Quran Teacher Online, Learn Quran Online, Noorani Qaida Online, Hifz Program Online, Female Quran Teacher, Tajweed Classes, Online Islamic Education" 
        />
        <link rel="canonical" href="https://mushafalnoor.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mushaf Al Noor - Online Quran Academy | Learn Quran Online" />
        <meta property="og:description" content="Personalized Quran classes with certified teachers. Tajweed, Hifz, Noorani Qaida courses available 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mushafalnoor.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mushaf Al Noor - Online Quran Academy" />
        <meta name="twitter:description" content="Learn Quran online with certified teachers. Book your free trial today!" />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Mushaf Al Noor Online Quran Academy",
            "description": "Online Quran Academy offering personalized Quran classes with certified male and female teachers.",
            "url": "https://mushafalnoor.com",
            "telephone": "+1234567890",
            "email": "info@mushafalnoor.com",
            "sameAs": [
              "https://facebook.com/mushafalnoor",
              "https://instagram.com/mushafalnoor",
              "https://youtube.com/mushafalnoor"
            ],
            "offers": {
              "@type": "Offer",
              "name": "Free Trial Class",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <CoursesSection />
          <HowItWorksSection />
          <TeachersSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
