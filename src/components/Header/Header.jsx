import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
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
import { Dropdown } from "./Dropdown/Dropdown";

import { PiDevToLogoFill as TempLogo } from "react-icons/pi";

import { NAVIGATION_ITEMS } from "@/data/navigation";
import { DROPDOWN_SECTIONS } from "@/data/dropdown";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState("");
  const [currentSubView, setCurrentSubView] = useState("");
  const router = useRouter();

  const onItemClick = (e, id) => {
    e.preventDefault();
    setCurrentSubView("");
    if (currentView === id) {
      router.push("/" + id);
      return;
    }

    if (id !== "home") {
      setCurrentView(id);
      return;
    }

    setCurrentView("");
    router.push("/");
  };

  const onSubItemClick = (e, navItemId, navItemHref) => {
    e.preventDefault();
    if (currentSubView === navItemId) {
      router.push(navItemHref);
      return;
    }

    setCurrentSubView(navItemId);
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
            <img src="/logo/i_logo.svg" alt="Novelex Logo" />
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
                    activeUrl={router.pathname === "/" + item.id}
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
              closeDropDown={() => setCurrentView("")}
              viewId={currentView}
              subViewId={currentSubView}
              onItemClick={onSubItemClick}
            />
          </HeaderBoxContainer>
        )}
      </HeaderBox>
    </HeaderWrapper>
  );
};
