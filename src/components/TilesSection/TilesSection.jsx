import React from "react";
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

export const TilesSection = ({ content, images }) => {
  return (
    <TilesSectionWrapper>
      <TilesSectionContainer>
        <TilesSectionContent>
          <TilesSectionTitle>{content.title}</TilesSectionTitle>
          <TilesSectionDescription>
            {content.description}
          </TilesSectionDescription>
        </TilesSectionContent>

        <TilesSectionPreview>
          <TilesSectionCollection>
            {[...Array(3).keys()].map((nth) => (
              <Tile
                key={nth}
                title={content[`tile${nth + 1}Title`]}
                description={content[`tile${nth + 1}Description`]}
                button={content.button}
              />
            ))}
          </TilesSectionCollection>

          <TilesSelectionImage>
            <img src={images.image} alt="Purpose, Values and Strategy" />
          </TilesSelectionImage>
        </TilesSectionPreview>
      </TilesSectionContainer>
    </TilesSectionWrapper>
  );
};
