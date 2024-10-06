import * as React from "react";
import { NavigationData, SocialMediasData } from "@data";
import { renderIcon } from "@utils";

import "./FooterNav.scss";

export const FooterNav = () => (
  <div className="footer-nav">
    <div className="footer-nav__container">
      <ul className="footer-nav__list">
        {NavigationData.map((item) => (
          <li className="footer-nav__item" key={item.id}>
            <a className="footer-nav__link" href={"/" + item.id}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="footer-nav__social-list">
        {SocialMediasData.map(({ url, id }) => (
          <li className="footer-nav__social-item" key={id}>
            <a className="footer-nav__social-link" href={url} target="_blank">
              <span>{renderIcon(id)}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
