import * as React from "react";
import {
  ImageCardContainer,
  ImageCardContent,
  ImageCardIcon,
  ImageCardTitle,
} from "./ImageCard.styles";

export type ImageCardPropsType = {
  title: string;
  iconURL: string;
  imageURL: string;
};

export const ImageCard = ({ title, iconURL, imageURL }: ImageCardPropsType) => (
  <ImageCardContainer imageURL={imageURL} href="#">
    <ImageCardContent>
      <ImageCardTitle>{title}</ImageCardTitle>
      {iconURL && (
        <ImageCardIcon dangerouslySetInnerHTML={{ __html: iconURL }} />
      )}
    </ImageCardContent>
  </ImageCardContainer>
);
