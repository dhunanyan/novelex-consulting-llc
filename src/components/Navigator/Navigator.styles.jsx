import styled, { css } from "styled-components";
import {
  Container,
  MAIN_BLACK_COLOR,
  MAIN_COLOR,
  MAIN_WHITE_COLOR,
} from "@/utils/styles";

export const NavigatorWrapper = styled.nav`
  padding: 95px 0 0 0;
  width: 100%;
  background-color: ${MAIN_BLACK_COLOR};
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.47);
  transition: all 150ms ease-out;
`;

export const NavigatorContainer = styled.div``;

export const NavigatorList = styled.ul`
  ${Container};
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 0px;

  &:hover > li > a {
    color: grey;
  }
`;

export const NavigatorItem = styled.li`
  display: flex;
  align-items: center;
`;

const navigatorLinkStyles = css`
  color: ${MAIN_WHITE_COLOR};
  margin: 0 15px;
  padding: 25px 0;
  transition: all 150ms ease-out;

  &:hover {
    color: ${MAIN_WHITE_COLOR} !important;
  }
`;

export const NavigatorLink = styled.a`
  ${navigatorLinkStyles};
  cursor: pointer;
`;

export const NavigatorText = styled.p`
  ${navigatorLinkStyles};
`;

export const NavigatorIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: grey;
`;
