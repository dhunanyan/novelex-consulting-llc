import * as React from "react";
import "./ImageCard.scss";

export type ImageCardPropsType = {
  title: string;
  iconURL: string;
  imageURL: string;
};

export const ImageCard = ({ title, iconURL, imageURL }: ImageCardPropsType) => (
  <li
    className="image-card"
    style={{
      backgroundImage: imageURL,
    }}
  >
    <a className="image-card__content" href="#">
      <h3 className="image-card__title">{title}</h3>
      {iconURL && (
        <div
          className="image-card__icon"
          dangerouslySetInnerHTML={{ __html: iconURL }}
        />
      )}
    </a>
  </li>
);
