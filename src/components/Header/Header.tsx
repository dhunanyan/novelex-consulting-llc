"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Dropdown } from "./Dropdown";
import { Navigator } from "./Navigator";

import { NavigationData, DropdownData } from "@data";

import "./Header.scss";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [selectedView, setSelectedView] = React.useState<string>("");
  const [selectedSubView, setSelectedSubView] = React.useState<string>("");
  const [isDropdownOpened, setIsDropdownOpened] =
    React.useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const onItemClick = (
    e: React.MouseEvent<HTMLLIElement | HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setSelectedSubView("");
    setSelectedView(id);

    if (id === "home") {
      router.push("/");
      setIsDropdownOpened(false);
      return;
    }

    if (pathname.includes(id) && !isDropdownOpened) {
      setIsDropdownOpened(true);
      return;
    }

    if (selectedView === id) {
      router.push("/" + id);
      setIsDropdownOpened((prev) => !prev);
      return;
    }

    setIsDropdownOpened(true);
  };

  const onSubItemClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    navItemId: string,
    navItemHref: string
  ) => {
    e.preventDefault();
    if (selectedSubView === navItemId) {
      router.push(navItemHref);
      setIsDropdownOpened(false);
      return;
    }

    setSelectedSubView(navItemId);
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
      <div className={"header" + (isScrolled ? " header--is-scrolled" : "")}>
        <div>
          <div className="header__container">
            <Link
              className={
                "header__logo" +
                (isScrolled ? " header__logo--is-scrolled" : "")
              }
              href="/"
              onClick={(e) => onItemClick(e, "home")}
            >
              <Image
                layout="fill"
                objectFit="contain"
                src="/icons/i_logo.svg"
                alt="Novelex Logo"
              />
            </Link>
            <nav className="header__nav">
              <ul className="header__list">
                {NavigationData.map(({ id, text }) => (
                  <li className="header__item" key={id}>
                    <Link
                      className={
                        "header__link" +
                        (isScrolled ? " header__link--is-scrolled" : "") +
                        (selectedView === id
                          ? " header__link--view-active"
                          : "") +
                        (pathname.includes(id)
                          ? " header__link--route-active"
                          : "")
                      }
                      href={"/" + id}
                      onClick={(e) => onItemClick(e, id)}
                    >
                      {text}
                    </Link>
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
            (!!selectedView && !!DropdownData[selectedView]
              ? " header__box--active"
              : "")
          }
        >
          {isDropdownOpened && DropdownData[selectedView] && (
            <div className="header__box-container">
              <Dropdown
                closeDropDown={() => setIsDropdownOpened(false)}
                viewId={selectedView}
                subViewId={selectedSubView}
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
          <Link className="header__logo" href="/">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/i_logo.svg"
              alt="Novelex Logo"
            />
          </Link>
          <nav className="header__nav">
            <ul className="header__list">
              {NavigationData.map((item) => (
                <li className="header__item" key={item.id}>
                  <Link className="header__link" href={item.id}>
                    {item.text}
                  </Link>
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
