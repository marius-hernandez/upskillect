import {
  LandingPrimaryImageCtaSection,
  LandingPrimaryVideoCtaSection,
} from "@/components/landing/cta/LandingPrimaryCta";
import { LandingDiscount } from "@/components/landing/discount/LandingDiscount";
import { LandingProductHuntAward } from "@/components/landing/social-proof/LandingProductHuntAward";
import { LandingSocialProof } from "@/components/landing/social-proof/LandingSocialProof";
import { LandingSocialProofBand } from "@/components/landing/social-proof/LandingSocialProofBand";
import { LandingSocialProofBandItem } from "@/components/landing/social-proof/LandingSocialProofBandItem";

import { Button } from "@/components/shared/ui/button";
import { colors } from "@/data/config/colors";

export default function Hero() {
  return (
    <>
      <LandingPrimaryImageCtaSection
        title="Landing page in minutes"
        description="Get 10x more done with Shadcn UI, React & Next.js, and say goodbye to repetitive tasks. You'll never go back."
        imageSrc="/upskai.png"
        imageAlt="Upskai"
        minHeight={500}
        
      >
        <Button size="xl" asChild>
          <a href="#">Let's get started</a>
        </Button>

        <Button size="xl" variant="outlinePrimary">
          <a href="#">Read more</a>
        </Button>

        <LandingDiscount
          className="w-full"
          discountValueText="$350 off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />
      </LandingPrimaryImageCtaSection>
    </>
  );
}
