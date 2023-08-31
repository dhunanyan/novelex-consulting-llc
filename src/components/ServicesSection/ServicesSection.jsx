import React from "react";
import {
  ServicesButton,
  ServicesCards,
  ServicesContainer,
  ServicesContent,
  ServicesDescription,
  ServicesSubtitle,
  ServicesTitle,
  ServicesWrapper,
} from "./ServicesSection.styles";
import { PrimaryCard } from "@/components/PrimaryCard/PrimaryCard";

export const ServicesSection = ({ content, SVGs }) => {
  return (
    <ServicesWrapper>
      <ServicesContainer>
        <ServicesCards>
          {[0, 2].map((times, i) => (
            <div key={i}>
              {[1, 2].map((nth) => (
                <PrimaryCard
                  key={nth}
                  title={content[`card${times + nth}Title`]}
                  description={content[`card${times + nth}Description`]}
                  icon={SVGs[`card${times + nth}Icon`]}
                  button={content.button}
                />
              ))}
            </div>
          ))}
        </ServicesCards>

        <ServicesContent>
          <ServicesSubtitle>{content.subtitle}</ServicesSubtitle>
          <ServicesTitle>{content.title}</ServicesTitle>
          <ServicesDescription>{content.description}</ServicesDescription>
          <ServicesButton> {content.button}</ServicesButton>
        </ServicesContent>
      </ServicesContainer>
    </ServicesWrapper>
  );
};
