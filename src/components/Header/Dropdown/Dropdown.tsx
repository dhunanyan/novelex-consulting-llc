import * as React from "react";
import Image from "next/image";

import { FaTimes as CloseIcon } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight as Arrow } from "react-icons/md";

import { DropdownData, SubDropdownData } from "@data";

import "./Dropdown.scss";

export type DropdownPropsType = {
  viewId: string;
  subViewId: string;
  closeDropDown: () => void;
  onItemClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    navItemId: string,
    navItemHref: string
  ) => void;
};

export const Dropdown = ({
  viewId,
  subViewId,
  closeDropDown,
  onItemClick,
}: DropdownPropsType) => {
  const { title, description, goToLink, navList, extraContent } =
    DropdownData[viewId];

  return (
    <div className="dropdown">
      <div className="dropdown__close-button" onClick={closeDropDown}>
        <CloseIcon />
      </div>

      <div className="dropdown__content">
        <h2 className="dropdown__title">{title}</h2>
        <p className="dropdown__description">{description}</p>
        <a className="dropdown__go-to-link" href={"/" + viewId}>
          <span>{goToLink}</span>
          <Arrow />
        </a>
      </div>

      <nav className="dropdown__nav--sub">
        <ul className="dropdown__list">
          {navList.map((navItem) => (
            <li className="dropdown__item" key={navItem.id}>
              <a
                className="dropdown__link"
                onClick={(e) => onItemClick(e, navItem.id, navItem.href)}
                href={navItem.href}
              >
                {navItem.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {!subViewId ? (
        <div className="dropdown__extra-content">
          <div className="dropdown__extra-content-image">
            <Image
              layout="fill"
              objectFit="cover"
              src={extraContent.imagePath}
              alt={extraContent.imageAlt}
            />
          </div>

          <h3 className="dropdown__extra-content-subtitle">
            {extraContent.subtitle}
          </h3>

          <h2 className="dropdown__extra-content-motto">
            {extraContent.motto}
          </h2>
        </div>
      ) : (
        <div className="dropdown__extra-content">
          <nav className="dropdown__nav--sub dropdown__nav--sub-view">
            <ul className="dropdown__list">
              {(
                SubDropdownData[viewId] as {
                  [key: string]: {
                    id: string;
                    text: string;
                    href: string;
                  }[];
                }
              )[subViewId].map((navItem) => (
                <li className="dropdown__item" key={navItem.id}>
                  <a className="dropdown__link" href={navItem.href}>
                    {navItem.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};
