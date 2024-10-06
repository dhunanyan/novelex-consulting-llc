import * as React from "react";
import Image from "next/image";

export type SummarySectionPropsType = {
  title: string;
  subtitle: string;
  description: string;
  button: string;
  imageURL: string;
  isInverted?: boolean;
};

export const SummarySection = ({
  title,
  subtitle,
  description,
  button,
  imageURL,
  isInverted = false,
}: SummarySectionPropsType) => (
  <section className={"summary" + isInverted ? "summary--inverted" : ""}>
    <div className="summary__container">
      <div className="summary__icon">
        <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
      </div>
      <div className="summary__content">
        <h3 className="summary__subtitle">{subtitle}</h3>
        <h1 className="summary__title">{title}</h1>
        <p className="summary__description">{description}</p>
        <button className="summary__button">{button}</button>
      </div>
    </div>
  </section>
);
