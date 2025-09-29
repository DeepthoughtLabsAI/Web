import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FoundationSection from '@/components/FoundationSection';
import AudiencesSection from '@/components/AudiencesSection';
import EthosSection from '@/components/EthosSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FoundationSection />
      <AudiencesSection />
      <EthosSection />
      <ContactSection />
    </main>
  );
}
