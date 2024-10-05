import { MAIN_COLOR, MAIN_BLACK_COLOR, MAIN_WHITE_COLOR } from "@utils/styles";
import styled from "styled-components";

export const IconCardWrapper = styled.button`
  color: ${({ inverseColors }) =>
    inverseColors ? MAIN_WHITE_COLOR : MAIN_BLACK_COLOR};
  background-color: ${({ inverseColors }) =>
    inverseColors ? MAIN_BLACK_COLOR : MAIN_WHITE_COLOR};
  width: 100%;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.47);
  transition: all 150ms ease-out;
  cursor: ${({ cursor }) => cursor};

  &:last-of-type {
    margin: 0 0 0 20px;
  }

  &:hover {
    transform: translate(-5px, -5px);

    .primary-card-button {
      div {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      p {
        width: 100%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
`;

export const IconCardContainer = styled.div`
  min-height: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IconCardIcon = styled.div`
  background-color: ${MAIN_COLOR};
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  transition: all 150ms ease-out;
  z-index: 1;

  svg {
    width: 40px;
    height: 40px;
    color: ${MAIN_WHITE_COLOR};
  }
`;

export const IconCardButton = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  transition: all 150ms ease-out;
  width: 100%;

  p {
    background-color: ${({ inverseColors }) =>
      inverseColors ? MAIN_WHITE_COLOR : MAIN_BLACK_COLOR};
    transition: all 150ms ease-out;
    position: absolute;
    z-index: 0;
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ inverseColors }) =>
      inverseColors ? MAIN_BLACK_COLOR : MAIN_WHITE_COLOR};
    border-radius: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 300;
    font-size: 13px;

    span {
      padding: 5px 15px 5px 65px;
    }
  }
`;

export const IconCardTitle = styled.h4`
  font-size: 18px;
  letter-spacing: -1.5px;
  font-weight: 300;
  margin: 20px 0;
`;

export const IconCardDescription = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  color: ${({ inverseColors }) =>
    (inverseColors ? MAIN_WHITE_COLOR : MAIN_BLACK_COLOR) + "a0"};
  line-height: 16px;
  text-align: left;
`;
