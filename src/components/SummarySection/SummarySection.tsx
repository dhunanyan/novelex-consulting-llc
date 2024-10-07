import * as React from "react";
import { Sections } from "@config";
import Image from "next/image";

import "./SummarySection.scss";

export type SummarySectionPropsType = {
  type?: Sections.SUMMARY;
  title: string;
  subtitle: string;
  description: string;
  button: string;
  redirectURL: string;
  imageURL: string;
  isInversed?: boolean;
};

export const SummarySection = ({
  title,
  subtitle,
  description,
  button,
  redirectURL,
  imageURL,
  isInversed = false,
}: SummarySectionPropsType) => (
  <section className={"summary" + (isInversed ? " summary--inverted" : "")}>
    <div className="summary__container">
      <div className="summary__image">
        <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
      </div>
      <div className="summary__content">
        <h3 className="summary__subtitle">{subtitle}</h3>
        <h1 className="summary__title">{title}</h1>
        <p className="summary__description">{description}</p>
        <a href={redirectURL} className="summary__button">
          {button}
        </a>
      </div>
    </div>
  </section>
);
