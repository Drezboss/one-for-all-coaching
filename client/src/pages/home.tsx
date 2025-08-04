import { HeroSection } from "@/components/hero-section";
import { SessionTypes } from "@/components/session-types";
import { AboutMeSection } from "@/components/about-me-section";
import { CTASection } from "@/components/cta-section";
import { ReadyToTrain } from "@/components/ready-to-train";
import { StickyCTA } from "@/components/sticky-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <StickyCTA />
      <HeroSection />
      <SessionTypes />
      <AboutMeSection />
      <CTASection />
      <ReadyToTrain />
    </div>
  );
}
