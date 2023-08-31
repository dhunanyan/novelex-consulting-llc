import React from "react";
import {
  ManageCards,
  ManageContainer,
  ManageContent,
  ManageSubtitle,
  ManageTitle,
  ManageWrapper,
} from "./ManageSection.styles";
import { ImageCard } from "../ImageCard/ImageCard";

export const ManageSection = ({ content, images, SVGs }) => {
  return (
    <ManageWrapper>
      <ManageContainer>
        <ManageContent>
          <ManageTitle>{content.title}</ManageTitle>
          <ManageSubtitle>{content.description}</ManageSubtitle>
        </ManageContent>

        <ManageCards>
          {[...Array(6).keys()].map((nth) => (
            <ImageCard
              key={nth}
              title={content[`card${nth + 1}Title`]}
              image={images[`card${nth + 1}Image`]}
              icon={SVGs[`card${nth + 1}Icon`]}
              button={content.button}
            />
          ))}
        </ManageCards>
      </ManageContainer>
    </ManageWrapper>
  );
};
