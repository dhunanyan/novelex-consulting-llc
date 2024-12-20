import * as React from "react";
import { Sections } from "@config";
import Image from "next/image";
import { Tile } from "./Tile";

import "./TilesSection.scss";

export type TilesSectionPropsType = {
  type?: Sections.TILES;
  title: string;
  description: string;
  imageURL: string;
  tiles: {
    title: string;
    description: string;
    button: string;
    redirectURL: string;
  }[];
};

export const TilesSection = ({
  title,
  description,
  tiles,
  imageURL,
}: TilesSectionPropsType) => (
  <section className="tiles">
    <div className="tiles__container">
      <div className="tiles__content">
        <h1 className="tiles__title">{title}</h1>
        <p className="tiles__description">{description}</p>
      </div>

      <div className="tiles__preview">
        <ul className="tiles__list">
          {tiles.map(({ title, description, button, redirectURL }, i) => (
            <Tile
              key={i}
              title={title}
              description={description}
              button={button}
              redirectURL={redirectURL}
            />
          ))}
        </ul>

        <div className="tiles__image">
          <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
        </div>
      </div>
    </div>
  </section>
);
