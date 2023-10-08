import React from "react";
import {
  IconCardsButton,
  IconCardsCards,
  IconCardsContainer,
  IconCardsContent,
  IconCardsDescription,
  IconCardsSubtitle,
  IconCardsTitle,
  IconCardsWrapper,
} from "./IconCardsSection.styles";
import { IconCard } from "@/components/IconCardsSection/IconCard/IconCard";

export const IconCardsSection = ({
  content,
  SVGs,
  order = 0,
  contentBackgroundColor = "transparent",
  inverseColors = false,
  forceHideButton = false,
}) => (
  <IconCardsWrapper inverseColors={inverseColors}>
    <IconCardsContainer>
      <IconCardsContent
        order={order}
        backgroundColor={contentBackgroundColor}
        inverseColors={inverseColors}
      >
        <IconCardsSubtitle>{content.subtitle}</IconCardsSubtitle>
        <IconCardsTitle>{content.title}</IconCardsTitle>
        <IconCardsDescription>{content.description}</IconCardsDescription>
        <IconCardsButton inverseColors={inverseColors}>
          {content.button}
        </IconCardsButton>
      </IconCardsContent>
      <IconCardsCards order={order}>
        {[0, 2].map((times, i) => (
          <div key={i}>
            {[1, 2].map((nth) => (
              <IconCard
                key={nth}
                title={content[`card${times + nth}Title`]}
                description={content[`card${times + nth}Description`]}
                icon={SVGs[`card${times + nth}Icon`]}
                button={content.button}
                forceHideButton={forceHideButton}
                inverseColors={inverseColors}
              />
            ))}
          </div>
        ))}
      </IconCardsCards>
    </IconCardsContainer>
  </IconCardsWrapper>
);
