import * as React from "react";
import { Sections } from "@config";
import { ImageCard } from "./ImageCard";

import "./ImageCardsSection.scss";

export type ImageCardsSectionPropsType = {
  type?: Sections.IMAGE_CARDS;
  title: string;
  description: string;
  cards: {
    title: string;
    imageURL: string;
    iconURL: string;
    redirectURL: string;
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
        {cards.map(({ title, imageURL, iconURL, redirectURL }, i) => (
          <ImageCard
            key={i}
            title={title}
            imageURL={imageURL}
            iconURL={iconURL}
            redirectURL={redirectURL}
          />
        ))}
      </ul>
    </div>
  </section>
);
