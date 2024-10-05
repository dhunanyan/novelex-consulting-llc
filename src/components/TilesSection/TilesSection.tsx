import * as React from "react";
import { Tile } from "./Tile/Tile";
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

export const TilesSection = ({ title, description, tiles, imageURL }) => {
  return (
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
            <img src={imageURL} alt={title} />
          </TilesSelectionImage>
        </TilesSectionPreview>
      </TilesSectionContainer>
    </TilesSectionWrapper>
  );
};
