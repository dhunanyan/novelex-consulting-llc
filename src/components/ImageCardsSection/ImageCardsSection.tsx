import * as React from "react";
import { ImageCard } from "./ImageCard";

import "./ImageCardsSection.scss";

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
  <section className="image-cards">
    <div className="image-cards__container">
      <div className="image-cards__content">
        <h1 className="image-cards__title">{title}</h1>
        <p className="image-cards__description">{description}</p>
      </div>

      <ul className="image-cards__list">
        {cards.map(({ title, imageURL, iconURL }, i) => (
          <ImageCard
            key={i}
            title={title}
            imageURL={imageURL}
            iconURL={iconURL}
          />
        ))}
      </ul>
    </div>
  </section>
);
