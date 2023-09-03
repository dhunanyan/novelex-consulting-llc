import {
  BigTitle,
  Container,
  MAIN_BLACK_COLOR,
  MAIN_WHITE_COLOR,
  PrimaryButton,
  Subtitle,
} from "@/utils/styles";
import styled, { css } from "styled-components";

const heroWithImageStyles = (imageUrl) => css`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  min-height: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: ${MAIN_WHITE_COLOR};

  > div {
    width: 100%;
    justify-content: flex-start;

    > div {
      background-color: ${MAIN_BLACK_COLOR};
    }
  }

  > h1 {
    margin: 0;
  }
`;

export const HeroWrapper = styled.section`
  background-color: ${MAIN_WHITE_COLOR};
  overflow: hidden;
  padding-top: ${({ isNavigatorDisabled }) =>
    isNavigatorDisabled ? "90px" : "0px"};

  > h1 {
    margin: 0 0 20px 0;
  }
  ${({ imageUrl }) => (imageUrl ? heroWithImageStyles(imageUrl) : "")}
`;

export const HeroContainer = styled.div`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const HeroIcon = styled.div`
  width: 700px;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);

  svg {
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

export const HeroSubtitle = styled.h3`
  ${Subtitle}
  margin: 0 0 10px 0;
`;

export const HeroTitle = styled.h1`
  ${BigTitle}
`;

export const HeroDescription = styled.p`
  line-height: 22px;
`;

export const HeroButton = styled.button`
  ${PrimaryButton(false)}
`;
