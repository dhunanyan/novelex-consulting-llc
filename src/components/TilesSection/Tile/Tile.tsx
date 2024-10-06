import * as React from "react";
import "./Tile.scss";

export type TilePropsType = {
  title: string;
  description: string;
  button: string;
};

export const Tile = ({ title, description, button }: TilePropsType) => (
  <li className="tile">
    <h3 className="tile__title">{title}</h3>
    <p className="tile__description">{description}</p>
    <button className="tile__button">{button}</button>
  </li>
);
