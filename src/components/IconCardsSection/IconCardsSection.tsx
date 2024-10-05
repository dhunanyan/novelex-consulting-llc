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

export type IconCardsSectionPropsType = {
  title: string;
  subtitle: string;
  description: string;
  button: string;
  cards: {
    title: string;
    description: string;
    button: string;
    iconURL: string;
  }[];
  order?: number;
  contentBackgroundColor?: string;
  inverseColors?: boolean;
  forceHideButton?: boolean;
};

export const IconCardsSection = ({
  title,
  subtitle,
  description,
  button,
  cards,
  order = 0,
  contentBackgroundColor = "transparent",
  inverseColors = false,
  forceHideButton = false,
}: IconCardsSectionPropsType) => (
  <IconCardsWrapper inverseColors={inverseColors}>
    <IconCardsContainer>
      <IconCardsContent order={order} backgroundColor={contentBackgroundColor}>
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
              {cards.slice(cards.length / 2).map(() => (
                <IconCard
                  key={i + cards.length / 2}
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
