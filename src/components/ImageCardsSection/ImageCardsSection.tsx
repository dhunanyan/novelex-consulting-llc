import * as React from "react";
import {
  ImageCardsCards,
  ImageCardsContainer,
  ImageCardsContent,
  ImageCardsSubtitle,
  ImageCardsTitle,
  ImageCardsWrapper,
} from "./ImageCardsSection.styles";
import { ImageCard } from "./ImageCard";

export type ImageCardsSectionPropsType = {
  title: string;
  description: string;
  cards: {
    title: string;
    imageURL: string;
    iconURL: string;
  }[];
};

export const ImageCardsSection = ({
  title,
  description,
  cards,
}: ImageCardsSectionPropsType) => (
  <ImageCardsWrapper>
    <ImageCardsContainer>
      <ImageCardsContent>
        <ImageCardsTitle>{title}</ImageCardsTitle>
        <ImageCardsSubtitle>{description}</ImageCardsSubtitle>
      </ImageCardsContent>

      <ImageCardsCards>
        {cards.map(({ title, imageURL, iconURL }, i) => (
          <ImageCard
            key={i}
            title={title}
            imageURL={imageURL}
            iconURL={iconURL}
          />
        ))}
      </ImageCardsCards>
    </ImageCardsContainer>
  </ImageCardsWrapper>
);
