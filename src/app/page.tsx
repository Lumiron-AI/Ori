import { Hero } from '@/components/sections/hero';
import { Solutions } from '@/components/sections/solutions';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Cta } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <HowItWorks />
      <Cta />
    </>
  );
}
