import * as React from "react";
import { FooterData } from "@data";

import "./FooterLinks.scss";

export const FooterLinks = () => (
  <div className="footer-links">
    <ul className="footer-links__list">
      {FooterData.map((item) => (
        <li className="footer-links__item" key={item.id}>
          <a className="footer-links__link" href={item.id}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
