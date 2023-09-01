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
import { usePathname } from "next/navigation";

export const HeroSection = ({ content, SVGs }) => {
  const pathname = usePathname();
  const list = pathname.substring(1).split("/");

  return (
    <HeroWrapper isNavigatorDisabled={list.length <= 1}>
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
