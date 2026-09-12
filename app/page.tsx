import { AboutSection } from "@/app/components/landing/about-section";
import { ContactSection } from "@/app/components/landing/contact-section";
import { HeroSection } from "@/app/components/landing/hero-section";
import { InsightsSection } from "@/app/components/landing/insights-section";
import { PracticeAreasSection } from "@/app/components/landing/practice-areas-section";
import { SiteFooter } from "@/app/components/landing/site-footer";
import { SiteHeader } from "@/app/components/landing/site-header";
import { WhatsAppWidget } from "@/app/components/landing/whatsapp-widget";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppWidget />
    </>
  );
}
