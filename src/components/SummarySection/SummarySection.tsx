import * as React from "react";
import Image from "next/image";

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
        <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
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
