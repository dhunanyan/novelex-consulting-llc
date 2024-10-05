import React, { useState } from "react";
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

export const Dropdown = ({ closeDropDown, viewId, subViewId, onItemClick }) => {
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
              {SubDropdownData[viewId][subViewId].map((navItem) => (
                <DropdownItem key={navItem.id}>
                  <DropdownLink
                    // onClick={(e) => onItemClick(e, navItem.id, navItem.href)}
                    href={navItem.href}
                  >
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
