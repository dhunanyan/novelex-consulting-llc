import {
  MAIN_BLACK_COLOR,
  MAIN_WHITE_COLOR,
  PrimaryButton,
} from "@utils/styles";
import styled from "styled-components";

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${MAIN_BLACK_COLOR + "1f"};
  backdrop-filter: blur(20px);
  color: ${MAIN_WHITE_COLOR};
  margin: 0 0 20px 0;
  padding: 20px;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.47);
  transition: all 150ms ease-out;

  &:last-of-type {
    margin: 0;
  }

  &:hover {
    transform: translate(50px, 0);
    opacity: 1 !important;
    background-color: ${MAIN_BLACK_COLOR + "9f"};
  }
`;

export const TileTitle = styled.h3`
  font-size: 24px;
  letter-spacing: -1.5px;
  font-weight: 200;
  margin: 0 0 20px 0;
`;

export const TileDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  color: ${MAIN_WHITE_COLOR};
  line-height: 16px;
  text-align: left;
  opacity: 0.7;
  line-height: 18px;
`;

export const TileButton = styled.button`
  ${PrimaryButton(true)};
  margin: 20px 0 0 auto;
  padding: 7px 15px;
  font-size: 14px;
  font-weight: 300;
`;
