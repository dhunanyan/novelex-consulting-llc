import React from "react";
import {
  BlankSectionButton,
  BlankSectionContainer,
  BlankSectionDescription,
  BlankSectionTitle,
  BlankSectionWrapper,
} from "./BlankSection.styles";

export const BlankSection = ({ content }) => {
  return (
    <BlankSectionWrapper>
      <BlankSectionContainer>
        <BlankSectionTitle>{content.title}</BlankSectionTitle>
        <BlankSectionDescription>{content.description}</BlankSectionDescription>
        <BlankSectionButton>{content.button}</BlankSectionButton>
      </BlankSectionContainer>
    </BlankSectionWrapper>
  );
};
