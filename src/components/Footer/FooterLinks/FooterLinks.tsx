import * as React from "react";
import Link from "next/link";
import { FooterData } from "@data";

import "./FooterLinks.scss";

export const FooterLinks = () => (
  <div className="footer-links">
    <ul className="footer-links__list">
      {FooterData.map((item) => (
        <li className="footer-links__item" key={item.id}>
          <Link className="footer-links__link" href={"/" + item.id}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
