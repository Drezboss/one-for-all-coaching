import { HeroBlock } from "@/components/templates/HeroBlock";
import { SessionTypesBlock } from "@/components/templates/SessionTypesBlock";
import { AboutMeBlock } from "@/components/templates/AboutMeBlock";
import { CTABlock } from "@/components/templates/CTABlock";
import { ContactCard } from "@/components/templates/ContactCard";
import { StickyCTAHeader } from "@/components/templates/StickyCTAHeader";

export default function FigmaHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StickyCTAHeader />
      <HeroBlock />
      <SessionTypesBlock />
      <AboutMeBlock />
      <CTABlock />
      <ContactCard />
    </div>
  );
}