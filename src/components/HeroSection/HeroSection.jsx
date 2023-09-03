import React from "react";

import {
  HeroButton,
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroSubtitle,
  HeroTitle,
  HeroWrapper,
  HeroIcon,
} from "./HeroSection.styles";
import { usePathname } from "next/navigation";

export const HeroSection = ({ content, images, SVGs }) => {
  const pathname = usePathname();
  const list = pathname.substring(1).split("/");

  return (
    <HeroWrapper
      isNavigatorDisabled={list.length <= 1}
      imageUrl={images.welcomeImage}
    >
      <HeroContainer>
        {SVGs.welcomeIcon && (
          <HeroIcon dangerouslySetInnerHTML={{ __html: SVGs.welcomeIcon }} />
        )}
        <HeroContent>
          <HeroSubtitle>{content.welcomeSubtitle}</HeroSubtitle>
          <HeroTitle>{content.welcomeTitle}</HeroTitle>
          <HeroDescription>{content.welcomeDescription}</HeroDescription>
          {content.welcomeButton && (
            <HeroButton>{content.welcomeButton}</HeroButton>
          )}
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
};
