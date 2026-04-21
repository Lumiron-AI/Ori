import { OriPhoneHeroSection } from "@/components/sections/ori-phone/hero-section";
import { SponsorshipSection } from "@/components/sections/ori-phone/sponsorship-section";
import { UseCaseSection } from "@/components/sections/ori-phone/use-case-section";
import { InterfaceSection } from "@/components/sections/ori-phone/interface-section";
import { ComparisonSection } from "@/components/sections/ori-phone/comparison-section";
import { FAQSection } from "@/components/sections/ori-phone/faq-section";
import { OriPhonePricingSection } from "@/components/sections/ori-phone/pricing-section";
import { TrialCTASection } from "@/components/sections/ori-phone/trial-cta-section";

export const metadata = {
  title: "Ori Téléphone — Assistant vocal IA pour restaurateurs | Lumiron",
  description:
    "Ori décroche vos appels 24h/24, prend les réservations et gère les questions fréquentes. Essai gratuit 7 jours, sans engagement.",
};

export default function OriPhonePage() {
  return (
    <>
      <OriPhoneHeroSection />
      <UseCaseSection />
      <InterfaceSection />
      <TrialCTASection />
      <ComparisonSection />
      <SponsorshipSection />
      <FAQSection />
      <OriPhonePricingSection />
    </>
  );
}
