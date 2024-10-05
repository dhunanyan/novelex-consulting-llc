import React from "react";
import {
  ImageCardContainer,
  ImageCardContent,
  ImageCardIcon,
  ImageCardTitle,
} from "./ImageCard.styles";

export const ImageCard = ({ title, icon, image }) => (
  <ImageCardContainer imageURL={image} href="#">
    <ImageCardContent>
      <ImageCardTitle>{title}</ImageCardTitle>
      {icon && <ImageCardIcon dangerouslySetInnerHTML={{ __html: icon }} />}
    </ImageCardContent>
  </ImageCardContainer>
);
