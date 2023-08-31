import React from "react";

import {
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroSubtitle,
  HeroTitle,
  HeroWrapper,
  HeroImage,
} from "./HeroSection.styles";

export const HeroSection = ({ content, SVGs }) => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroImage
          dangerouslySetInnerHTML={{ __html: SVGs.homePageWelcomeIcon }}
        />
        <HeroContent>
          <HeroSubtitle>{content.homePageWelcomeSubtitle}</HeroSubtitle>
          <HeroTitle>{content.homePageWelcomeTitle}</HeroTitle>
          <HeroDescription>
            {content.homePageWelcomeDescription}
          </HeroDescription>
          <HeroButton>{content.homePageWelcomeButton}</HeroButton>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};
