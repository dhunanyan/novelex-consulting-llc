import * as React from "react";
import Link from "next/link";
import { Sections } from "@config";
import { IconCard } from "./IconCard";
import "./IconCardsSection.scss";

export type IconCardsSectionPropsType = {
  type?: Sections.ICON_CARDS;
  title: string;
  subtitle: string;
  description: string;
  button: string;
  redirectURL: string;
  cards: {
    title: string;
    description: string;
    button: string;
    redirectURL: string;
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
  redirectURL,
  cards,
  order = 0,
  contentBackgroundColor = "transparent",
  inverseColors = false,
  forceHideButton = false,
}: IconCardsSectionPropsType) => (
  <section
    className={"icon-cards" + (inverseColors ? " icon-cards--inverse" : "")}
  >
    <div className="icon-cards__container">
      <div
        className={
          "icon-cards__content" +
          (order !== 0 ? " icon-cards__content--switched-order" : "")
        }
        style={{
          ...(!inverseColors
            ? { backgroundColor: contentBackgroundColor }
            : {}),
          order: order,
        }}
      >
        <h3 className="icon-cards__subtitle">{subtitle}</h3>
        <h2 className="icon-cards__title">{title}</h2>
        <p className="icon-cards__description">{description}</p>
        <Link
          href={redirectURL}
          className={
            "icon-cards__button" +
            (inverseColors ? " icon-cards__button--inverse" : "")
          }
        >
          {button}
        </Link>
      </div>
      <ul className="icon-cards__list">
        <div
          style={{
            margin: order === 0 ? "0 0 0 20px" : "0 20px 0 0",
          }}
        >
          {cards
            .slice(0, cards.length / 2)
            .map(({ title, description, button, iconURL, redirectURL }, i) => (
              <IconCard
                key={i + cards.length / 2}
                title={title}
                description={description}
                button={button}
                redirectURL={redirectURL}
                iconURL={iconURL}
                forceHideButton={forceHideButton}
                inverseColors={inverseColors}
              />
            ))}
        </div>
        <div
          style={{
            margin: order === 0 ? "0 0 0 20px" : "0 20px 0 0",
          }}
        >
          {cards
            .slice(cards.length / 2)
            .map(({ title, description, button, iconURL, redirectURL }, i) => (
              <IconCard
                key={i + cards.length / 2}
                title={title}
                description={description}
                button={button}
                redirectURL={redirectURL}
                iconURL={iconURL}
                forceHideButton={forceHideButton}
                inverseColors={inverseColors}
              />
            ))}
        </div>
      </ul>
    </div>
  </section>
);
