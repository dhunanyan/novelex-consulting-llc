import * as React from "react";

import {
  SummaryButton,
  SummaryContainer,
  SummaryContent,
  SummaryDescription,
  SummarySubtitle,
  SummaryTitle,
  SummaryWrapper,
  SummaryIcon,
} from "./SummarySection.styles";

export const SummarySection = ({
  title,
  subtitle,
  description,
  button,
  imageURL,
  isInverted = false,
}) => {
  return (
    <SummaryWrapper imageURL={imageURL} isInverted={isInverted}>
      <SummaryContainer>
        <SummaryIcon>
          <img src={imageURL} />
        </SummaryIcon>
        <SummaryContent>
          <SummarySubtitle>{subtitle}</SummarySubtitle>
          <SummaryTitle>{title}</SummaryTitle>
          <SummaryDescription>{description}</SummaryDescription>
          <SummaryButton>{button}</SummaryButton>
        </SummaryContent>
      </SummaryContainer>
    </SummaryWrapper>
  );
};
