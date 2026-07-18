import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Mushaf Al Noor</title>
        <meta name="description" content="Read our terms and conditions for using Mushaf Al Noor online Quran academy services." />
        <link rel="canonical" href="https://mushafalnoor.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container-custom">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
                Terms & Conditions
              </h1>
            </div>
          </section>

          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">Last updated: November 28, 2024</p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-6">
                  By accessing and using Mushaf Al Noor's services, you accept and agree to be bound by these Terms and Conditions.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
                <p className="text-muted-foreground mb-6">
                  Mushaf Al Noor provides online Quran education services including Quran reading, Tajweed, Hifz,
                  and Islamic studies through live one-on-one classes with certified teachers.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. Registration and Account</h2>
                <p className="text-muted-foreground mb-6">
                  You must provide accurate and complete information when creating an account. You are responsible
                  for maintaining the confidentiality of your account credentials.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-6">
                  Payment is required before classes commence. We accept various payment methods as listed on our
                  pricing page. Refunds are provided according to our refund policy.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Class Scheduling</h2>
                <p className="text-muted-foreground mb-6">
                  Classes must be rescheduled at least 24 hours in advance. Missed classes without prior notice
                  may be forfeited.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Code of Conduct</h2>
                <p className="text-muted-foreground mb-6">
                  Students and parents must maintain respectful behavior towards teachers and staff. Any form of
                  harassment or inappropriate conduct will result in immediate termination of services.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms & Conditions, contact us at info@mushafalnoor.com
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
