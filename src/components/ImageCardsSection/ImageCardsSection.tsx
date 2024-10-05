import * as React from "react";
import {
  ImageCardsCards,
  ImageCardsContainer,
  ImageCardsContent,
  ImageCardsSubtitle,
  ImageCardsTitle,
  ImageCardsWrapper,
} from "./ImageCardsSection.styles";
import { ImageCard } from "./ImageCard/ImageCard";

export const ImageCardsSection = ({ title, description, button, cards }) => 
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
              image={imageURL}
              icon={iconURL}
              button={button}
            />
          ))}
        </ImageCardsCards>
      </ImageCardsContainer>
    </ImageCardsWrapper>
  );
