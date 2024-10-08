import * as React from "react";
import Link from "next/link";
import { Sections } from "@config";
import "./BlankSection.scss";

export type BlankSectionPropsType = {
  type?: Sections.BLANK;
  title: string;
  description: string;
  button: string;
  redirectURL: string;
};

export const BlankSection = ({
  title,
  description,
  button,
  redirectURL,
}: BlankSectionPropsType) => (
  <section className="blank">
    <div className="blank__container">
      <h2 className="blank__title">{title}</h2>
      <p className="blank__description">{description}</p>
      {button && redirectURL && (
        <Link href={redirectURL} className="blank__button">
          {button}
        </Link>
      )}
    </div>
  </section>
);
