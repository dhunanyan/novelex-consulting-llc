import * as React from "react";

import {
  HeroContainer,
  HeroContent,
  HeroSubtitle,
  HeroTitle,
  HeroWrapper,
} from "./HeroSection.styles";

export type HeroSectionPropsType = {
  title: string;
  subtitle: string;
  imageURL: string;
  isInverted?: boolean;
};

export const HeroSection = ({
  title,
  subtitle,
  imageURL,
  isInverted = false,
}: HeroSectionPropsType) => (
  <HeroWrapper isInverted={isInverted}>
    <img src={imageURL} />
    <HeroContainer>
      <HeroContent>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <HeroTitle>{title}</HeroTitle>
      </HeroContent>
    </HeroContainer>
  </HeroWrapper>
);
