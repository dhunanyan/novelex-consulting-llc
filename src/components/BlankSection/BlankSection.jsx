import React from "react";
import {
  BlankSectionButton,
  BlankSectionContainer,
  BlankSectionDescription,
  BlankSectionTitle,
  BlankSectionWrapper,
} from "./BlankSection.styles";

export const BlankSection = ({ title, description, button }) => (
  <BlankSectionWrapper>
    <BlankSectionContainer>
      <BlankSectionTitle>{title}</BlankSectionTitle>
      <BlankSectionDescription>{description}</BlankSectionDescription>
      <BlankSectionButton>{button}</BlankSectionButton>
    </BlankSectionContainer>
  </BlankSectionWrapper>
);
