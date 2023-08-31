import React from "react";
import {
  WhoWeAreButton,
  WhoWeAreCards,
  WhoWeAreContainer,
  WhoWeAreContent,
  WhoWeAreDescription,
  WhoWeAreSubtitle,
  WhoWeAreTitle,
  WhoWeAreWrapper,
} from "./WhoWeAreSection.styles";
import { PrimaryCard } from "@/components/PrimaryCard/PrimaryCard";

export const WhoWeAreSection = ({ content, SVGs }) => {
  return (
    <WhoWeAreWrapper>
      <WhoWeAreContainer>
        <WhoWeAreContent>
          <WhoWeAreSubtitle>{content.subtitle}</WhoWeAreSubtitle>
          <WhoWeAreTitle>{content.title}</WhoWeAreTitle>
          <WhoWeAreDescription>{content.description}</WhoWeAreDescription>
          <WhoWeAreButton> {content.button}</WhoWeAreButton>
        </WhoWeAreContent>
        <WhoWeAreCards>
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
        </WhoWeAreCards>
      </WhoWeAreContainer>
    </WhoWeAreWrapper>
  );
};
