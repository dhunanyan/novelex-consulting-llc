import * as React from "react";
import {
  IconCardButton,
  IconCardContainer,
  IconCardDescription,
  IconCardIcon,
  IconCardTitle,
  IconCardWrapper,
} from "./IconCard.styles";

export type IconCardPropsType = {
  title: string;
  description: string;
  button: string;
  iconURL: string;
  inverseColors: boolean;
  forceHideButton: boolean;
};

export const IconCard = ({
  title,
  description,
  button,
  iconURL,
  inverseColors,
  forceHideButton,
}: IconCardPropsType) => (
  <IconCardWrapper
    inverseColors={inverseColors}
    cursor={forceHideButton || !button ? "auto" : "pointer"}
  >
    <IconCardContainer>
      {(forceHideButton || !button) && iconURL && (
        <IconCardIcon dangerouslySetInnerHTML={{ __html: iconURL }} />
      )}
      {!forceHideButton && button && iconURL && (
        <IconCardButton
          inverseColors={inverseColors}
          className="primary-card-button"
        >
          <IconCardIcon dangerouslySetInnerHTML={{ __html: iconURL }} />
          <p>
            <span>{button}</span>
          </p>
        </IconCardButton>
      )}
      {title && <IconCardTitle>{title}</IconCardTitle>}
      {description && (
        <IconCardDescription inverseColors={inverseColors}>
          {description}
        </IconCardDescription>
      )}
    </IconCardContainer>
  </IconCardWrapper>
);
