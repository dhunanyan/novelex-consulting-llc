import * as React from "react";
import {
  BlankSectionButton,
  BlankSectionContainer,
  BlankSectionDescription,
  BlankSectionTitle,
  BlankSectionWrapper,
} from "./BlankSection.styles";

export type BlankSectionPropsType = {
  title: string;
  description: string;
  button: string;
};

export const BlankSection = ({
  title,
  description,
  button,
}: BlankSectionPropsType) => (
  <BlankSectionWrapper>
    <BlankSectionContainer>
      <BlankSectionTitle>{title}</BlankSectionTitle>
      <BlankSectionDescription>{description}</BlankSectionDescription>
      <BlankSectionButton>{button}</BlankSectionButton>
    </BlankSectionContainer>
  </BlankSectionWrapper>
);
