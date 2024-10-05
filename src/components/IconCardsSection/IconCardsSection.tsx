import * as React from "react";
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
import { IconCard } from "@components/IconCardsSection/IconCard/IconCard";

export const IconCardsSection = ({
  subtitle,
  title,
  description,
  button,
  cards,
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
        <IconCardsSubtitle>{subtitle}</IconCardsSubtitle>
        <IconCardsTitle>{title}</IconCardsTitle>
        <IconCardsDescription>{description}</IconCardsDescription>
        <IconCardsButton inverseColors={inverseColors}>
          {button}
        </IconCardsButton>
      </IconCardsContent>
      <IconCardsCards order={order}>
        {cards
          .slice(0, cards.length / 2)
          .map(({ title, description, button, iconURL }, i) => (
            <div key={i}>
              {cards.slice(cards.length / 2).map((nth) => (
                <IconCard
                  key={nth}
                  title={title}
                  description={description}
                  button={button}
                  icon={iconURL}
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
