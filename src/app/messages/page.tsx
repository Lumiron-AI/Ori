import { OriMessagesHeroSection } from "@/components/sections/ori-messages/hero-section";
import { OriMessagesUseCaseSection } from "@/components/sections/ori-messages/use-case-section";
import { OriMessagesInterfaceSection } from "@/components/sections/ori-messages/interface-section";
import { OriMessagesTrialCTASection } from "@/components/sections/ori-messages/trial-cta-section";
import { OriMessagesComparisonSection } from "@/components/sections/ori-messages/comparison-section";
import { OriMessagesSponsorshipSection } from "@/components/sections/ori-messages/sponsorship-section";
import { OriMessagesFAQSection } from "@/components/sections/ori-messages/faq-section";
import { OriMessagesPricingSection } from "@/components/sections/ori-messages/pricing-section";

export const metadata = {
  title: "Ori Messages — Assistant IA WhatsApp & Instagram pour restaurateurs | Lumiron",
  description:
    "Ori répond instantanément à vos messages WhatsApp et Instagram, prend les réservations et gère vos questions fréquentes. Essai gratuit 7 jours, sans engagement.",
};

export default function OriMessagesPage() {
  return (
    <>
      <OriMessagesHeroSection />
      <OriMessagesUseCaseSection />
      <OriMessagesInterfaceSection />
      <OriMessagesTrialCTASection />
      <OriMessagesComparisonSection />
      <OriMessagesSponsorshipSection />
      <OriMessagesFAQSection />
      <OriMessagesPricingSection />
    </>
  );
}
