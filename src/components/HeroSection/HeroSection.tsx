import * as React from "react";

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

export const HeroSection = ({
  title,
  subtitle,
  imageURL,
  icon,
  isInverted = false,
}) => {
    <HeroWrapper isInverted={isInverted}>
      <img src={imageURL} />
      <HeroContainer>
        {icon && <HeroIcon dangerouslySetInnerHTML={{ __html: icon }} />}
        <HeroContent>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          <HeroTitle>{title}</HeroTitle>
        </HeroContent>
      </HeroContainer>
    </HeroWrapper>
  );
