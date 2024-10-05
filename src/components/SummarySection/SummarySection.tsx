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

export type SummarySectionPropsType = {
  title: string;
  subtitle: string;
  description: string;
  button: string;
  imageURL: string;
  isInverted?: boolean;
};

export const SummarySection = ({
  title,
  subtitle,
  description,
  button,
  imageURL,
  isInverted = false,
}: SummarySectionPropsType) => (
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
