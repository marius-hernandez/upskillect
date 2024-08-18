import {
  LandingPrimaryImageCtaSection,
  LandingPrimaryVideoCtaSection,
} from "@/components/landing/cta/LandingPrimaryCta";
import { LandingDiscount } from "@/components/landing/discount/LandingDiscount";
import { LandingProductHuntAward } from "@/components/landing/social-proof/LandingProductHuntAward";
import { LandingSocialProof } from "@/components/landing/social-proof/LandingSocialProof";
import { LandingSocialProofBand } from "@/components/landing/social-proof/LandingSocialProofBand";
import { LandingSocialProofBandItem } from "@/components/landing/social-proof/LandingSocialProofBandItem";
import { Button } from "@/components/ui/button";

import { colors } from "@/data/config/colors";

export default function Hero() {
  return (
    <>
      <LandingPrimaryImageCtaSection
        title="Hi I’m Upskai,"
        description="Let’s start your flexible, personalized, & affordable journey!"
        imageSrc="/upskai.png"
        imageAlt="Upskai"
        minHeight={500}
        
      >
        <Button>
          Let&apos;s get started
        </Button>

        <Button>
          Read more
        </Button>

        <LandingDiscount
          className="w-full"
          discountValueText="₱350 off"
          discountDescriptionText="for the first 10 customers (2 left)"
        />
      </LandingPrimaryImageCtaSection>
    </>
  );
}
