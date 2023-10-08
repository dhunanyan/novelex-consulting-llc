import {
  BigTitle,
  Container,
  PrimaryButton,
  Subtitle,
  MAIN_WHITE_COLOR,
  SECONDARY_BLACK_COLOR,
} from "@/utils/styles";
import styled, { css } from "styled-components";

const heroWithImageStyles = (imageUrl, isInverted) => css`
  background-image: url(${imageUrl});
  background-size: cover;
  background-position: center;
  min-height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: ${isInverted ? SECONDARY_BLACK_COLOR : MAIN_WHITE_COLOR};

  > div {
    width: 100%;
    justify-content: flex-start;

    > div {
      position: relative;
      max-width: 100%;

      h3 {
        font-weight: 200;
      }

      &::before {
        top: -15px;
        left: -15px;
        content: "";
        position: absolute;
        height: 100%;
        width: 100vw;
        background-color: ${isInverted
          ? MAIN_WHITE_COLOR
          : SECONDARY_BLACK_COLOR};
        opacity: 0.8;
        z-index: 0;
        padding: 15px;
      }
    }
  }

  > h1 {
    margin: 0;
  }
`;

export const HeroWrapper = styled.section`
  position: relative;
  background-color: ${MAIN_WHITE_COLOR};
  overflow: hidden;

  > h1 {
    margin: 0 0 20px 0;
  }
  ${({ imageUrl, isInverted }) =>
    imageUrl ? heroWithImageStyles(imageUrl, isInverted) : ""}
`;

export const HeroContainer = styled.div`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeroIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;

  svg,
  img {
    opacity: 0.2;
    width: 100%;
  }
`;

export const HeroContent = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  z-index: 1;
`;

export const HeroSubtitle = styled.h3`
  ${Subtitle}
  margin: 0 0 10px 0;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  ${BigTitle}
  z-index: 1;
`;

export const HeroDescription = styled.p`
  line-height: 22px;
`;

export const HeroButton = styled.button`
  ${PrimaryButton(false)}
`;
