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

export const HeroSection = ({
  content,
  images,
  SVGs,
  forceDisablePadding = false,
  isInverted = false,
  forceImageInsteadIcon = false,
}) => {
  const pathname = usePathname();
  const list = pathname.substring(1).split("/");

  return (
    <HeroWrapper
      isNavigatorDisabled={list.length <= 1 && !forceDisablePadding}
      imageUrl={images.welcomeImage}
      isInverted={isInverted}
    >
      <HeroContainer>
        {SVGs.welcomeIcon && !forceImageInsteadIcon && (
          <HeroIcon dangerouslySetInnerHTML={{ __html: SVGs.welcomeIcon }} />
        )}
        {forceImageInsteadIcon && (
          <HeroIcon>
            <img src="/hero/building.png" />
          </HeroIcon>
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
