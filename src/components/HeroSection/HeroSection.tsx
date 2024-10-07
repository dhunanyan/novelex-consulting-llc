import * as React from "react";
import { Sections } from "@config";
import Image from "next/image";

import "./HeroSection.scss";

export type HeroSectionPropsType = {
  type?: Sections.HERO;
  title: string;
  subtitle: string;
  imageURL: string;
  isInversed?: boolean;
};

export const HeroSection = ({
  title,
  subtitle,
  imageURL,
  isInversed = false,
}: HeroSectionPropsType) => (
  <section className={"hero" + (isInversed ? " hero--inverted" : "")}>
    <Image layout="fill" objectFit="cover" src={imageURL} alt={title} />
    <div className="hero__container">
      <div
        className={
          "hero__content" + (isInversed ? " hero__content--inverted" : "")
        }
      >
        <h3 className="hero__subtitle">{subtitle}</h3>
        <h1 className="hero__title">{title}</h1>
      </div>
    </div>
  </section>
);
