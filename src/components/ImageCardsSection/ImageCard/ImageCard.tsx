import * as React from "react";
import Image from "next/image";
import { Icons } from "@config";

import "./ImageCard.scss";

export type ImageCardPropsType = {
  title: string;
  iconURL: string;
  imageURL: string;
};

export const ImageCard = ({ title, iconURL, imageURL }: ImageCardPropsType) => (
  <li className="image-card">
    <div className="image-card__image">
      <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
    </div>
    <a className="image-card__content" href="#">
      <h3 className="image-card__title">{title}</h3>
      {iconURL && (
        <div
          className="image-card__icon"
          dangerouslySetInnerHTML={{ __html: Icons[iconURL] }}
        />
      )}
    </a>
  </li>
);
