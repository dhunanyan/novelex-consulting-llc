import React, { useEffect, useState } from "react";
import {
  IconCardButton,
  IconCardContainer,
  IconCardDescription,
  IconCardIcon,
  IconCardTitle,
  IconCardWrapper,
} from "./IconCard.styles";

export const IconCard = ({
  icon,
  title,
  description,
  button,
  inverseColors,
  forceHideButton,
}) => (
  <IconCardWrapper
    inverseColors={inverseColors}
    cursor={forceHideButton || !button ? "auto" : "pointer"}
  >
    <IconCardContainer>
      {(forceHideButton || !button) && icon && (
        <IconCardIcon dangerouslySetInnerHTML={{ __html: icon }} />
      )}
      {!forceHideButton && button && icon && (
        <IconCardButton
          inverseColors={inverseColors}
          className="primary-card-button"
        >
          <IconCardIcon dangerouslySetInnerHTML={{ __html: icon }} />
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
