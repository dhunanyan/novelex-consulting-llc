import * as React from "react";
import "./BlankSection.scss";

export type BlankSectionPropsType = {
  title: string;
  description: string;
  button: string;
};

export const BlankSection = ({
  title,
  description,
  button,
}: BlankSectionPropsType) => (
  <section className="blank">
    <div className="blank__container">
      <h2 className="blank__title">{title}</h2>
      <p className="blank__description">{description}</p>
      <button className="blank__button">{button}</button>
    </div>
  </section>
);
