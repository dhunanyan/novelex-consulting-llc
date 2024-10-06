import * as React from "react";
import { Icons } from "@config";
import "./IconCard.scss";

export type IconCardPropsType = {
  title: string;
  description: string;
  button: string;
  iconURL: string;
  inverseColors: boolean;
  forceHideButton: boolean;
};

export const IconCard = ({
  title,
  description,
  button,
  iconURL,
  inverseColors,
  forceHideButton,
}: IconCardPropsType) => (
  <li
    className={
      "icon-card" +
      (inverseColors ? " icon-card--inverse" : "") +
      (forceHideButton || !button ? " icon-card--pointer" : "")
    }
  >
    <div className={"icon-card__container"}>
      {(forceHideButton || !button) && iconURL && (
        <div
          className={"icon-card__icon"}
          dangerouslySetInnerHTML={{ __html: Icons[iconURL] }}
        />
      )}
      {!forceHideButton && button && iconURL && (
        <button className={"icon-card__button"}>
          <div
            className={"icon-card__icon"}
            dangerouslySetInnerHTML={{ __html: Icons[iconURL] }}
          />
          <p
            className={
              "icon-card__button-text" +
              (inverseColors ? " icon-card__button-text--inverse" : "")
            }
          >
            <span className={"icon-card__button-span"}>{button}</span>
          </p>
        </button>
      )}
      {title && <h2 className="icon-card__title">{title}</h2>}
      {description && (
        <p
          className={
            "icon-card__description" +
            (inverseColors ? " icon-card__description--inverse" : "")
          }
        >
          {description}
        </p>
      )}
    </div>
  </li>
);
