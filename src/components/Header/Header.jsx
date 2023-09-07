import React, { useState, useEffect } from "react";
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

import { NAVIGATION_ITEMS } from "@/data/navigation";
import { DROPDOWN_SECTIONS } from "@/data/dropdown";
import { useRouter } from "next/router";
import { Dropdown } from "./Dropdown/Dropdown";

export const Header = () => {
  const [currentView, setCurrentView] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
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

  const closeDropDown = () => {
    setCurrentView("");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <div>
        <HeaderContainer>
          <HeaderIcon href="/" onClick={(e) => onItemClick(e, "home")}>
            <TempLogo />
            <span>Novelex</span>
          </HeaderIcon>
          <HeaderNav>
            <HeaderList>
              {NAVIGATION_ITEMS.map((item) => (
                <HeaderListItem
                  key={item.id}
                  onClick={(e) => onItemClick(e, item.id)}
                >
                  <HeaderLink
                    isScrolled={isScrolled}
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
      <HeaderBox isActive={!!DROPDOWN_SECTIONS[currentView]}>
        {DROPDOWN_SECTIONS[currentView] && (
          <HeaderBoxContainer>
            <Dropdown
              {...DROPDOWN_SECTIONS[currentView]}
              closeDropDown={closeDropDown}
              id={currentView}
            />
          </HeaderBoxContainer>
        )}
      </HeaderBox>
    </HeaderWrapper>
  );
};
