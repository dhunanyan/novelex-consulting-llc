import * as React from "react";
import {
  DropdownCloseButton,
  DropdownContainer,
  DropdownContent,
  DropdownDescription,
  DropdownExtraContent,
  DropdownExtraContentImage,
  DropdownExtraContentMotto,
  DropdownExtraContentSubtitle,
  DropdownGoToLink,
  DropdownItem,
  DropdownLink,
  DropdownList,
  DropdownNav,
  DropdownTitle,
} from "./Dropdown.styles";

import { FaTimes as CloseIcon } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight as Arrow } from "react-icons/md";

import { DropdownData, SubDropdownData } from "@data";

export type DropdownPropsType = {
  closeDropDown: () => void;
  viewId: string;
  subViewId: string;
  onItemClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    navItemId: string,
    navItemHref: string
  ) => void;
};

export const Dropdown = ({
  closeDropDown,
  viewId,
  subViewId,
  onItemClick,
}: DropdownPropsType) => {
  const { title, description, goToLink, navList, extraContent } =
    DropdownData[viewId];

  return (
    <DropdownContainer>
      <DropdownCloseButton onClick={closeDropDown}>
        <CloseIcon />
      </DropdownCloseButton>

      <DropdownContent>
        <DropdownTitle>{title}</DropdownTitle>
        <DropdownDescription>{description}</DropdownDescription>
        <DropdownGoToLink href={"/" + viewId}>
          <span>{goToLink}</span>
          <Arrow />
        </DropdownGoToLink>
      </DropdownContent>

      <DropdownNav>
        <DropdownList>
          {navList.map((navItem) => (
            <DropdownItem key={navItem.id}>
              <DropdownLink
                onClick={(e) => onItemClick(e, navItem.id, navItem.href)}
                href={navItem.href}
              >
                {navItem.text}
              </DropdownLink>
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownNav>

      {!subViewId ? (
        <DropdownExtraContent>
          <DropdownExtraContentImage>
            <img src={extraContent.imagePath} alt={extraContent.imageAlt} />
          </DropdownExtraContentImage>

          <DropdownExtraContentSubtitle>
            {extraContent.subtitle}
          </DropdownExtraContentSubtitle>

          <DropdownExtraContentMotto>
            {extraContent.motto}
          </DropdownExtraContentMotto>
        </DropdownExtraContent>
      ) : (
        <DropdownExtraContent>
          <DropdownNav justifyContent="flex-start">
            <DropdownList>
              {(
                SubDropdownData[viewId] as {
                  [key: string]: {
                    id: string;
                    text: string;
                    href: string;
                  }[];
                }
              )[subViewId].map((navItem) => (
                <DropdownItem key={navItem.id}>
                  <DropdownLink href={navItem.href}>
                    {navItem.text}
                  </DropdownLink>
                </DropdownItem>
              ))}
            </DropdownList>
          </DropdownNav>
        </DropdownExtraContent>
      )}
    </DropdownContainer>
  );
};
