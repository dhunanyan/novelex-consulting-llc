import * as React from "react";
import Image from "next/image";

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
    <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
    <HeroContainer>
      <HeroContent>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <HeroTitle>{title}</HeroTitle>
      </HeroContent>
    </HeroContainer>
  </HeroWrapper>
);
