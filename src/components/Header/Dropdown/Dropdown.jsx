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

export const Dropdown = ({
  closeDropDown,
  title,
  description,
  goToLink,
  navList,
  extraContent,
  id,
}) => {
  const [currentHover, setCurrentHover] = useState(0);
  return (
    <DropdownContainer>
      <DropdownCloseButton onClick={closeDropDown}>
        <CloseIcon />
      </DropdownCloseButton>

      <DropdownContent>
        <DropdownTitle>{title}</DropdownTitle>
        <DropdownDescription>{description}</DropdownDescription>
        <DropdownGoToLink href={id}>
          <span>{goToLink}</span>
          <Arrow />
        </DropdownGoToLink>
      </DropdownContent>

      <DropdownNav>
        <DropdownList>
          {navList.map((navItem) => (
            <DropdownItem key={navItem.id}>
              <DropdownLink
                onMouseOut={() => setCurrentHover(0)}
                onMouseOver={() => setCurrentHover(navItem.id)}
                isDisabled={currentHover !== navItem.id && currentHover !== 0}
                isActive={currentHover === navItem.id}
                href={navItem.href}
              >
                {navItem.text}
              </DropdownLink>
            </DropdownItem>
          ))}
        </DropdownList>
      </DropdownNav>

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
    </DropdownContainer>
  );
};
