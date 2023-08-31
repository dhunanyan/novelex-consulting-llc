import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  HeaderBox,
  HeaderBoxContainer,
  HeaderContact,
  HeaderContainer,
  HeaderIcon,
  HeaderLink,
  HeaderList,
  HeaderListItem,
  HeaderNav,
  HeaderSide,
  HeaderWrapper,
} from "./Header.styles";
import { PiDevToLogoFill as TempLogo } from "react-icons/pi";

import { viewProps } from "./utils";
import { useRouter } from "next/router";
import { Dropdown } from "./Dropdown/Dropdown";

export const Header = () => {
  const [currentView, setCurrentView] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const onItemClick = (e, id) => {
    e.preventDefault();
    if (currentView === id) {
      router.replace("/" + id);
      setCurrentView("");
      return;
    }

    switch (id) {
      case "home":
        router.replace("/");
        setCurrentView("");
        break;

      case "who-we-are":
        setCurrentView(id);
        break;

      case "life-at-novelex":
        setCurrentView(id);
        break;

      case "services":
        setCurrentView(id);
        break;

      case "careers":
        setCurrentView(id);
        break;

      default:
        setCurrentView("");
        break;
    }
  };

  const HEADER_ITEMS = [
    {
      text: "Who We Are",
      id: "who-we-are",
    },
    {
      text: "Life at Novelex",
      id: "life-at-novelex",
    },
    {
      text: "Services",
      id: "services",
    },
    {
      text: "Careers",
      id: "careers",
    },
  ];

  const closeDropDown = () => {
    setCurrentView("");
  };

  return (
    <HeaderWrapper>
      <div>
        <HeaderContainer>
          <HeaderIcon href="/" onClick={(e) => onItemClick(e, "home")}>
            <TempLogo />
            <span>Novelex</span>
          </HeaderIcon>
          <HeaderNav>
            <HeaderList>
              {HEADER_ITEMS.map((item) => (
                <HeaderListItem
                  key={item.id}
                  onClick={(e) => onItemClick(e, item.id)}
                >
                  <HeaderLink
                    activeView={currentView === item.id}
                    activeUrl={pathname === "/" + item.id}
                    href={item.id}
                  >
                    {item.text}
                  </HeaderLink>
                </HeaderListItem>
              ))}
            </HeaderList>
          </HeaderNav>
          <HeaderSide>
            <HeaderContact>Contact</HeaderContact>
          </HeaderSide>
        </HeaderContainer>
      </div>
      <HeaderBox isActive={!!viewProps[currentView]}>
        {viewProps[currentView] && (
          <HeaderBoxContainer>
            <Dropdown
              {...viewProps[currentView]}
              closeDropDown={closeDropDown}
              id={currentView}
            />
          </HeaderBoxContainer>
        )}
      </HeaderBox>
    </HeaderWrapper>
  );
};
