import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Mushaf Al Noor</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://mushafalnoor.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container-custom">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                Privacy Policy
              </h1>
            </div>
          </section>

          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">Last updated: November 28, 2024</p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-6">
                  We collect information you provide directly to us, such as when you create an account, enroll in courses,
                  or contact us for support. This includes name, email address, phone number, and payment information.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-6">
                  We use the information we collect to provide, maintain, and improve our services, process transactions,
                  send you technical notices and support messages, and communicate with you about courses and updates.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground mb-6">
                  We do not sell your personal information. We may share your information with teachers assigned to your
                  courses and service providers who help us operate our platform.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground mb-6">
                  You have the right to access, update, or delete your personal information. You can also opt out of
                  marketing communications at any time.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at info@mushafalnoor.com
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
