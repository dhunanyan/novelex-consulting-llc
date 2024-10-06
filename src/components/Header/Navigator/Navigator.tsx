"use client";
import * as React from "react";
import { usePathname } from "next/navigation";

import { MdOutlineKeyboardDoubleArrowRight as Arrow } from "react-icons/md";

import { NavigatorData } from "@data";
import { getHref } from "@utils";
import { NavigatorID } from "@config/types";

import "./Navigator.scss";

export const Navigator = () => {
  const pathname = usePathname();
  const list = pathname.substring(1).split("/");
  const isNavigatorActive = list.length > 1;

  const filteredList = list.filter(
    (item) => !!NavigatorData[item as NavigatorID]
  );
  const isWrongRoute = filteredList.length !== list.length;

  if (isNavigatorActive) {
    return null;
  }

  return (
    <nav className="navigator">
      <div className="navigator__container">
        <ul className="navigator__list">
          {filteredList.map((item, index) => (
            <li className="navigator__item" key={index}>
              {index !== list.length - 1 ? (
                <>
                  <a
                    className="navigator__link"
                    href={getHref(filteredList, index)}
                  >
                    {NavigatorData[item as NavigatorID]}
                  </a>
                  <div className="navigator__icon">
                    <Arrow />
                  </div>
                </>
              ) : (
                <p className="navigator__text">
                  {NavigatorData[item as NavigatorID]}
                </p>
              )}
            </li>
          ))}
          {isWrongRoute && (
            <li className="navigator__item" key={filteredList.length}>
              <p className="navigator__text">Error</p>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
