import React from "react";

import { HomeWrapper } from "./Home.styles";
import { HeroSection } from "../HeroSection/HeroSection";
import { WhoWeAreSection } from "../WhoWeAreSection/WhoWeAreSection";
import { ManageSection } from "../ManageSection/ManageSection";
import { ServicesSection } from "../ServicesSection/ServicesSection";

export const Home = ({
  welcomeSection = null,
  services = null,
  imageCardsSection = null,
  whoWeAre = null,
}) => {
  if (!welcomeSection || !services || !imageCardsSection || !whoWeAre) {
    return <div>Loading</div>;
  }

  return (
    <HomeWrapper>
      <HeroSection
        content={welcomeSection.content}
        SVGs={welcomeSection.SVGs}
      />
      <WhoWeAreSection content={whoWeAre.content} SVGs={whoWeAre.SVGs} />
      <ManageSection
        content={imageCardsSection.content}
        SVGs={imageCardsSection.SVGs}
        images={imageCardsSection.images}
      />
      <ServicesSection
        content={services.content}
        SVGs={services.SVGs}
        images={services.images}
      />
    </HomeWrapper>
  );
};
