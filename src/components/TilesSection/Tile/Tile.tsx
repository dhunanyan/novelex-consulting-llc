import * as React from "react";
import {
  TileButton,
  TileContainer,
  TileDescription,
  TileTitle,
} from "./Tile.styles";

export type TilePropsType = {
  title: string;
  description: string;
  button: string;
};

export const Tile = ({ title, description, button }: TilePropsType) => (
  <TileContainer>
    <TileTitle>{title}</TileTitle>
    <TileDescription>{description}</TileDescription>
    <TileButton>{button}</TileButton>
  </TileContainer>
);
