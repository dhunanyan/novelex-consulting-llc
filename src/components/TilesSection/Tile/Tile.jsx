import React from "react";
import {
  TileButton,
  TileContainer,
  TileDescription,
  TileTitle,
} from "./Tile.styles";

export const Tile = ({ title, description, button }) => {
  return (
    <TileContainer>
      <TileTitle>{title}</TileTitle>
      <TileDescription>{description}</TileDescription>
      <TileButton>{button}</TileButton>
    </TileContainer>
  );
};
