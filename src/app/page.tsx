import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import FoundationSection from '@/components/FoundationSection';
import AudiencesSection from '@/components/AudiencesSection';
import EthosSection from '@/components/EthosSection';
import ContactSection from '@/components/ContactSection';
import ProcessDiagram from '@/components/ProcessDiagram';
import ConvergingIconsAnimation from '@/components/ConvergingIconsAnimation';

export default function Home() {
  return (
    <main>
      <Hero />
      <ConvergingIconsAnimation />
      <ProblemSection />
      <ProcessDiagram />
      <SolutionSection />
      <FoundationSection />
      <AudiencesSection />
      <EthosSection />
      <ContactSection />
    </main>
  );
}