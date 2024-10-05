import {
  Container,
  MAIN_BLACK_COLOR,
  MAIN_WHITE_COLOR,
  PRIMARY_BLACK_COLOR,
  PRIMARY_WHITE_COLOR,
  SECONDARY_BLACK_COLOR,
} from "@utils/styles";
import styled from "styled-components";

export const FooterNavWrapper = styled.div`
  background-color: ${PRIMARY_BLACK_COLOR + "7f"};
  box-shadow: 0px -2px 5px -2px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px -2px 5px -2px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px -2px 5px -2px rgba(0, 0, 0, 0.47);
`;

export const FooterNavContainer = styled.div`
  ${Container};
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const FooterNavList = styled.ul`
  margin-bottom: 20px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease-out;

  &:hover {
    a {
      color: ${PRIMARY_WHITE_COLOR + "a4"};
    }
  }
`;

export const FooterNavItem = styled.li`
  margin: 0 8px;
`;

export const FooterNavLink = styled.a`
  padding: 25px 0;
  font-size: 18px;
  font-weight: 300;
  margin: 0 14px;
  white-space: nowrap;
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: ${MAIN_WHITE_COLOR};
  white-space: nowrap;
  transition: all 150ms ease-out;

  &:hover {
    color: ${MAIN_WHITE_COLOR} !important;
  }
`;

export const FooterNavSocialList = styled.ul`
  border-top: 1px solid ${MAIN_WHITE_COLOR + "5a"};
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 150ms ease-out;

  &:hover {
    a {
      color: ${PRIMARY_WHITE_COLOR + "a4"};
    }
  }
`;

export const FooterNavSocialItem = styled.li`
  height: 50px;
  width: 50px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterNavSocialLink = styled.a`
  width: calc(100% - 1.4px);
  height: calc(100% - 1.6px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${MAIN_WHITE_COLOR};
  color: ${MAIN_WHITE_COLOR};
  border-radius: 4px;
  transition: all 120ms ease-out;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    transition: all 120ms ease-out;

    svg {
      transition: all 120ms ease-out;
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    width: 42px;
    height: 42px;
    color: ${MAIN_WHITE_COLOR} !important;

    span {
      width: 42px;
      height: 42px;
    }
  }
`;
