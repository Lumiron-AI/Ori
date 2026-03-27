import type { Metadata } from 'next';
import { PricingSection } from '@/components/sections/pricing';

export const metadata: Metadata = {
  title: 'Tarifs',
  description: 'Choisissez le plan Ori adapté à votre activité. 7 jours gratuits, sans engagement.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 section-padding">
      <PricingSection />
    </div>
  );
}
