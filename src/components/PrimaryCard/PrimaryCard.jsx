import React, { useEffect, useState } from "react";
import {
  PrimaryCardButton,
  PrimaryCardContainer,
  PrimaryCardDescription,
  PrimaryCardIcon,
  PrimaryCardTitle,
  PrimaryCardWrapper,
} from "./PrimaryCard.styles";
import Image from "next/image";

export const PrimaryCard = ({ icon, title, description, button }) => {
  return (
    <PrimaryCardWrapper>
      <PrimaryCardContainer>
        {!button && icon && (
          <PrimaryCardIcon dangerouslySetInnerHTML={{ __html: icon }} />
        )}
        {button && icon && (
          <PrimaryCardButton className="primary-card-button">
            <PrimaryCardIcon dangerouslySetInnerHTML={{ __html: icon }} />
            <p>
              <span>{button}</span>
            </p>
          </PrimaryCardButton>
        )}
        {title && <PrimaryCardTitle>{title}</PrimaryCardTitle>}
        {description && (
          <PrimaryCardDescription>{description}</PrimaryCardDescription>
        )}
      </PrimaryCardContainer>
    </PrimaryCardWrapper>
  );
};
