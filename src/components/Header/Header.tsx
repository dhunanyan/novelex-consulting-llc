"use client";

import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { Dropdown } from "./Dropdown";
import { Navigator } from "./Navigator";

import { NavigationData, DropdownData } from "@data";

import "./Header.scss";

export const Header = () => {
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
      <div className={"header" + (isScrolled ? " header--scrolled" : "")}>
        <div>
          <div className="header__container">
            <a
              className="header__logo"
              href="/"
              onClick={(e) => onItemClick(e, "home")}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src="/icons/i_logo.svg"
                alt="Novelex Logo"
              />
            </a>
            <nav className="header__nav">
              <ul className="header__list">
                {NavigationData.map((item) => (
                  <li
                    className="header__item"
                    key={item.id}
                    onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) =>
                      onItemClick(e, item.id)
                    }
                  >
                    <a
                      className={
                        "header__link" +
                        (isScrolled ? " header__link--is-scrolled" : "") +
                        (currentView === item.id
                          ? " header__link--view-active"
                          : "") +
                        (router.pathname === "/" + item.id
                          ? " header__link--route-active"
                          : "")
                      }
                      href={item.id}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header__side">
              <p className="header__text">Contact</p>
            </div>
          </div>
        </div>
        <div
          className={
            "header__box" +
            (!!currentView && !!DropdownData[currentView]
              ? " header__box--active"
              : "")
          }
        >
          {currentView && DropdownData[currentView] && (
            <div className="header__box-container">
              <Dropdown
                closeDropDown={() => setCurrentView("")}
                viewId={currentView}
                subViewId={currentSubView}
                onItemClick={onSubItemClick}
              />
            </div>
          )}
        </div>
      </div>
      <div className="header-layout" />
      <Navigator />
    </>
  );
};

export const HeaderFallback = () => {
  return (
    <div className="header">
      <div>
        <div className="header__container">
          <a className="header__logo" href="/">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/i_logo.svg"
              alt="Novelex Logo"
            />
          </a>
          <nav className="header__nav">
            <ul className="header__list">
              {NavigationData.map((item) => (
                <li className="header__item" key={item.id}>
                  <a className="header__link" href={item.id}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__side">
            <p className="header__text">Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};
