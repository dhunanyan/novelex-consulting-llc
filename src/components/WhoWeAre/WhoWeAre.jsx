import React from "react";

import { WhoWeAreWrapper } from "./WhoWeAre.styles";
import { HeroSection } from "../HeroSection/HeroSection";

export const WhoWeAre = ({ welcomeSection = null }) => {
  if (!welcomeSection) {
    return <div>Loading</div>;
  }

  return (
    <WhoWeAreWrapper>
      <HeroSection
        content={welcomeSection.content}
        SVGs={welcomeSection.SVGs}
        images={welcomeSection.images}
      />
    </WhoWeAreWrapper>
  );
};
