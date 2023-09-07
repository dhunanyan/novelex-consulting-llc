import React, { useEffect, useState } from "react";
import {
  IconCardButton,
  IconCardContainer,
  IconCardDescription,
  IconCardIcon,
  IconCardTitle,
  IconCardWrapper,
} from "./IconCard.styles";
import Image from "next/image";

export const IconCard = ({
  icon,
  title,
  description,
  button,
  inverseColors,
}) => {
  return (
    <IconCardWrapper inverseColors={inverseColors}>
      <IconCardContainer>
        {!button && icon && (
          <IconCardIcon dangerouslySetInnerHTML={{ __html: icon }} />
        )}
        {button && icon && (
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
};
