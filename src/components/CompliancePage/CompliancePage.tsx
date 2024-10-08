import * as React from "react";

import "./CompliancePage.scss";

export type CompliancePagePropsType = {
  title: string;
  sections: {
    title: string;
    description: string;
    subSections: {
      title: string;
      description: string;
    }[];
  }[];
};

export const CompliancePage = ({
  title: header,
  sections,
}: CompliancePagePropsType) => (
  <div className="compliance-pages">
    <div className="compliance-pages__container">
      <h1 className="compliance-pages__header">{header}</h1>
      {sections.map(({ title, description, subSections }, index) => (
        <section key={"" + index} className="compliance-pages__section">
          <h2 className="compliance-pages__title">{title}</h2>
          {description && (
            <p className="compliance-pages__description">{description}</p>
          )}
          {subSections && (
            <ul className="compliance-pages__list">
              {subSections.map(
                (
                  { title: subtitle, description: subDescription },
                  subIndex
                ) => (
                  <li
                    key={"" + index + subIndex}
                    className="compliance-pages__item"
                  >
                    <h3 className="compliance-pages__subtitle">{subtitle}</h3>
                    <p className="compliance-pages__description">
                      {subDescription}
                    </p>
                  </li>
                )
              )}
            </ul>
          )}
        </section>
      ))}
    </div>
  </div>
);
