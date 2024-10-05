import {
  BigTitle,
  Container,
  PrimaryButton,
  Subtitle,
  MAIN_WHITE_COLOR,
  SECONDARY_BLACK_COLOR,
} from "@utils/styles";
import styled, { css } from "styled-components";

export type Props = {
  imageURL?: string;
  isInverted?: boolean;
};

const summaryWithImageStyles = (
  imageURL: Props["imageURL"],
  isInverted: Props["isInverted"]
) => css`
  background-image: url(${imageURL});
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

export const SummaryWrapper = styled.section<
  Pick<Props, "imageURL" | "isInverted">
>`
  position: relative;
  background-color: ${MAIN_WHITE_COLOR};
  overflow: hidden;

  > h1 {
    margin: 0 0 20px 0;
  }
  ${({ imageURL, isInverted }) =>
    !imageURL ? summaryWithImageStyles(imageURL, isInverted) : ""}
`;

export const SummaryContainer = styled.div`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const SummaryIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  opacity: 0.2;
`;

export const SummaryContent = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  z-index: 1;
`;

export const SummarySubtitle = styled.h3`
  ${Subtitle}
  margin: 0 0 10px 0;
  z-index: 1;
`;

export const SummaryTitle = styled.h1`
  ${BigTitle}
  z-index: 1;
`;

export const SummaryDescription = styled.p`
  line-height: 22px;
`;

export const SummaryButton = styled.button`
  ${PrimaryButton(false)}
`;
