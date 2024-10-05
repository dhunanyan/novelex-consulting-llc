import {
  Container,
  MAIN_BLACK_COLOR,
  MAIN_COLOR,
  MAIN_WHITE_COLOR,
} from "@utils/styles";
import styled, { css } from "styled-components";

export type Props = {
  isScrolled: boolean;
  isNavigatorDisabled: boolean;
  isActive: boolean;
  isViewActive: boolean;
  activeUrl: string;
};

export const HeaderWrapper = styled.header<Pick<Props, "isScrolled">>`
  position: fixed;
  z-index: 99999999999999;
  height: ${({ isScrolled }) => (isScrolled ? "60px" : "95px")};
  width: 100%;
  background-color: ${MAIN_WHITE_COLOR};
  box-shadow: 0px -1px 7px 1px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px -1px 7px 1px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px -1px 7px 1px rgba(0, 0, 0, 0.47);
  transition: all 150ms ease-out;
  transition: height 200ms ease-in;

  > div:first-of-type {
    height: 100%;
    background-color: ${MAIN_WHITE_COLOR};
    position: relative;
    z-index: 1;
  }
`;

const containerStyles = css`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  ${containerStyles}
  padding-top: 0px;
  padding-bottom: 0px;
`;

export const HeaderBoxContainer = styled.div`
  ${containerStyles}
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const HeaderIcon = styled.a`
  align-items: center;
  color: ${MAIN_BLACK_COLOR};
  display: flex;
  justify-content: space-between;
  width: 50px;

  img {
    width: 100%;
  }
`;

export const HeaderNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderList = styled.ul`
  display: flex;
`;

export const HeaderListItem = styled.li``;

export const HeaderLink = styled.a<
  Pick<Props, "isScrolled" | "activeUrl" | "isViewActive">
>`
  font-size: 18px;
  font-weight: 300;
  margin: 0 14px;
  padding: ${({ isScrolled }: { isScrolled: boolean }) =>
    isScrolled ? "19px 0" : "35.5px 0"};
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: ${MAIN_BLACK_COLOR};
  transition: all 150ms ease-out;
  transition: padding 200ms ease-in;

  &::before,
  &::after {
    transition: all 150ms ease-out;
    content: "";
    display: block;
    position: absolute;
    height: 6px;
    background-color: ${({ activeUrl, isViewActive }) =>
      activeUrl ? MAIN_COLOR : isViewActive ? "#767676" : "transparent"};
    left: 0;
    bottom: 0;
  }

  &::before {
    z-index: 0;
    background-color: ${MAIN_COLOR};
    width: ${({ activeUrl }: { activeUrl: string }) =>
      activeUrl ? "100%" : "0"};
  }

  &::after {
    z-index: 1;
    width: ${({ activeUrl, isViewActive }) =>
      !activeUrl && isViewActive ? "100%" : "0"};
    background-color: #767676;
  }
`;

export const HeaderBox = styled.div<Pick<Props, "isActive">>`
  background-color: ${({ isActive }) =>
    isActive ? MAIN_BLACK_COLOR : MAIN_WHITE_COLOR};
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: all 200ms ease-out;
  width: 100%;
  transform: translate(0, ${({ isActive }) => (isActive ? "0" : "-200%")});
  box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.47);
  transition: all 150ms ease-out;
  position: relative;
`;

export const HeaderSide = styled.div``;

export const HeaderContact = styled.div``;
