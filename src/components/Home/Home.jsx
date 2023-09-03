import React from "react";

import { HomeWrapper } from "./Home.styles";
import { HeroSection } from "../HeroSection/HeroSection";
import { IconCardsSection } from "../IconCardsSection/IconCardsSection";
import { ImageCardsSection } from "../ImageCardsSection/ImageCardsSection";
import { SECONDARY_BLACK_COLOR } from "@/utils/styles";

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
        images={welcomeSection.images}
      />
      <IconCardsSection content={whoWeAre.content} SVGs={whoWeAre.SVGs} />
      <ImageCardsSection
        content={imageCardsSection.content}
        SVGs={imageCardsSection.SVGs}
        images={imageCardsSection.images}
      />
      <IconCardsSection
        content={services.content}
        SVGs={services.SVGs}
        images={services.images}
        order={1}
        contentBackgroundColor={SECONDARY_BLACK_COLOR}
      />
    </HomeWrapper>
  );
};
