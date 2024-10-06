import * as React from "react";
import Image from "next/image";

import "./HeroSection.scss";

export type HeroSectionPropsType = {
  title: string;
  subtitle: string;
  imageURL: string;
  isInverted?: boolean;
};

export const HeroSection = ({
  title,
  subtitle,
  imageURL,
  isInverted = false,
}: HeroSectionPropsType) => (
  <section className={"hero" + (isInverted ? " hero--inverted" : "")}>
    <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
    <div className="hero__container">
      <div
        className={
          "hero__content" + (isInverted ? " hero__content--inverted" : "")
        }
      >
        <h3 className="hero__subtitle">{subtitle}</h3>
        <h1 className="hero__title">{title}</h1>
      </div>
    </div>
  </section>
);
