"use client";

import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  HeaderBox,
  HeaderBoxContainer,
  HeaderContact,
  HeaderContainer,
  HeaderIcon,
  HeaderLayout,
  HeaderLink,
  HeaderList,
  HeaderListItem,
  HeaderNav,
  HeaderSide,
  HeaderWrapper,
} from "./Header.styles";
import { Dropdown } from "./Dropdown";

import { NavigationData, DropdownData } from "@data";

export const HeaderComponent = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [currentView, setCurrentView] = React.useState<string>("");
  const [currentSubView, setCurrentSubView] = React.useState<string>("");
  const router = useRouter();

  const onItemClick = (
    e: React.MouseEvent<HTMLLIElement | HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
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

  const onSubItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    navItemId: string,
    navItemHref: string
  ) => {
    e.preventDefault();
    if (currentSubView === navItemId) {
      router.push(navItemHref);
      return;
    }

    setCurrentSubView(navItemId);
  };

  React.useEffect(() => {
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
    <>
      <HeaderWrapper isScrolled={isScrolled}>
        <div>
          <HeaderContainer>
            <HeaderIcon href="/" onClick={(e) => onItemClick(e, "home")}>
              <Image
                layout="fill"
                objectFit="contain"
                src="/icons/i_logo.svg"
                alt="Novelex Logo"
              />
            </HeaderIcon>
            <HeaderNav>
              <HeaderList>
                {NavigationData.map((item) => (
                  <HeaderListItem
                    key={item.id}
                    onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
                      onItemClick(e, item.id)
                    }
                  >
                    <HeaderLink
                      isScrolled={isScrolled}
                      isViewActive={currentView === item.id}
                      isRouteActive={router.pathname === "/" + item.id}
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
        <HeaderBox isActive={!!currentView && !!DropdownData[currentView]}>
          {currentView && DropdownData[currentView] && (
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
      <HeaderLayout />
    </>
  );
};
