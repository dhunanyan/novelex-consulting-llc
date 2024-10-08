import * as React from "react";
import Link from "next/link";
import "./Tile.scss";

export type TilePropsType = {
  title: string;
  description: string;
  button: string;
  redirectURL: string;
};

export const Tile = ({
  title,
  description,
  button,
  redirectURL,
}: TilePropsType) => (
  <li className="tile">
    <h3 className="tile__title">{title}</h3>
    <p className="tile__description">{description}</p>
    <Link href={redirectURL} className="tile__button">
      {button}
    </Link>
  </li>
);
