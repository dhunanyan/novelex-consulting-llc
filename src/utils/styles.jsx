import { css } from "styled-components";

export const MAIN_COLOR = "#3f82f4";
export const MAIN_WHITE_COLOR = "#e8f2f2";
export const MAIN_BLACK_COLOR = "#292d33";
export const PRIMARY_BLACK_COLOR = "#555c66";
export const SECONDARY_BLACK_COLOR = "#3f3d48";
export const SECONDARY_COLOR = "#4f93f5";

export const Container = css`
  max-width: 1040px;
  margin: 0 auto;
  padding: 60px 30px;
`;

export const PrimaryButton = (isBackgroundBlack = false) => css`
  background-image: none;
  background-color: ${MAIN_COLOR};
  color: ${MAIN_WHITE_COLOR};
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 14px;
  border-style: none;
  margin: 45px auto 0 0;
  padding: 10px 52px 10px 51px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.47);
  transition: all 180ms ease-in-out;

  &:hover {
    background-color: ${isBackgroundBlack
      ? MAIN_WHITE_COLOR
      : MAIN_BLACK_COLOR};
    color: ${isBackgroundBlack ? MAIN_BLACK_COLOR : MAIN_WHITE_COLOR};
  }
`;

export const BigTitle = css`
  font-size: 46px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Title = css`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const Subtitle = css`
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 100;
`;
