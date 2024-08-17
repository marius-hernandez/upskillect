import { LandingFeatureList } from "@/components/landing/feature/LandingFeatureList";
import { Button } from "@/components/ui/button";
import { LayersIcon, LineChartIcon, MapPin, SparklesIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <>
      <LandingFeatureList
        title={"Smooth like a butter"}
        description={
          "Upskillect will help you transition smoothly to a new industry"
        }
        featureItems={[
          {
            title: "Upflex",
            description: "You can avail training chunks based on your availability. Empower trainees and trainers to create personalized calendar.",
            icon: <SparklesIcon />,
          },
          {
            title: "UpSeek",
            description: "Discover Nearby Training Institutes and Utilizes geolocation services to find training institutes nearby.",
            icon: <MapPin />,
          },
          {
            title: "UpskAI",
            description: "AI companion that let’s you personalize your training roadmap based on your current industry, and knowledge level.",
            icon: <Image src={'/upskai.svg'} width={40} height={40} priority alt="upskai" />,
          },
        ]}
      />
    </>
  );
};

export default Feature;
