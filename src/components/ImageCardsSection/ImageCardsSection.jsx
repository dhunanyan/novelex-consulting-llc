import React from "react";
import {
  ImageCardsCards,
  ImageCardsContainer,
  ImageCardsContent,
  ImageCardsSubtitle,
  ImageCardsTitle,
  ImageCardsWrapper,
} from "./ImageCardsSection.styles";
import { ImageCard } from "./ImageCard/ImageCard";

export const ImageCardsSection = ({ content, images, SVGs }) => {
  return (
    <ImageCardsWrapper>
      <ImageCardsContainer>
        <ImageCardsContent>
          <ImageCardsTitle>{content.title}</ImageCardsTitle>
          <ImageCardsSubtitle>{content.description}</ImageCardsSubtitle>
        </ImageCardsContent>

        <ImageCardsCards>
          {[...Array(6).keys()].map((nth) => (
            <ImageCard
              key={nth}
              title={content[`card${nth + 1}Title`]}
              image={images[`card${nth + 1}Image`]}
              icon={SVGs[`card${nth + 1}Icon`]}
              button={content.button}
            />
          ))}
        </ImageCardsCards>
      </ImageCardsContainer>
    </ImageCardsWrapper>
  );
};
