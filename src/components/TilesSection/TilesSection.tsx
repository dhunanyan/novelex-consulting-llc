import * as React from "react";
import Image from "next/image";
import { Tile } from "./Tile";

import {
  TilesSectionCollection,
  TilesSectionPreview,
  TilesSelectionImage,
  TilesSectionContainer,
  TilesSectionContent,
  TilesSectionDescription,
  TilesSectionTitle,
  TilesSectionWrapper,
} from "./TilesSection.styles";

export type TileSectionPropsType = {
  title: string;
  description: string;
  imageURL: string;
  tiles: {
    title: string;
    description: string;
    button: string;
  }[];
};

export const TilesSection = ({
  title,
  description,
  tiles,
  imageURL,
}: TileSectionPropsType) => (
  <TilesSectionWrapper>
    <TilesSectionContainer>
      <TilesSectionContent>
        <TilesSectionTitle>{title}</TilesSectionTitle>
        <TilesSectionDescription>{description}</TilesSectionDescription>
      </TilesSectionContent>

      <TilesSectionPreview>
        <TilesSectionCollection>
          {tiles.map(({ title, description, button }, i) => (
            <Tile
              key={i}
              title={title}
              description={description}
              button={button}
            />
          ))}
        </TilesSectionCollection>

        <TilesSelectionImage>
          <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
        </TilesSelectionImage>
      </TilesSectionPreview>
    </TilesSectionContainer>
  </TilesSectionWrapper>
);
