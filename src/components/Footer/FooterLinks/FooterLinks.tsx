import * as React from "react";
import Link from "next/link";
import { FooterData } from "@data";

import "./FooterLinks.scss";

export const FooterLinks = () => (
  <div className="footer-links">
    <ul className="footer-links__list">
      {FooterData.map(({ id, text, href }) => (
        <li className="footer-links__item" key={id}>
          <Link className="footer-links__link" href={href}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
