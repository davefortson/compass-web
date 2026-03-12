import Navbar from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSection from "@/components/sections/ProblemSection";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyCompass from "@/components/sections/WhyCompass";
import FeaturesModules from "@/components/sections/FeaturesModules";
import ModuleTour from "@/components/sections/ModuleTour";
import PersonaSection from "@/components/sections/PersonaSection";
import PrivacySection from "@/components/sections/PrivacySection";
import { LeadCapture } from "@/components/sections/LeadCapture";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <WhyCompass />
      <FeaturesModules />
      <ModuleTour />
      <PersonaSection />
      <PrivacySection />
      <TrustBar />
      <LeadCapture />
      <Footer />
    </main>
  );
}
