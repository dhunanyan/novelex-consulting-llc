import {
  Container,
  MAIN_WHITE_COLOR,
  PRIMARY_WHITE_COLOR,
  SECONDARY_BLACK_COLOR,
} from "@/utils/styles";
import styled from "styled-components";

export const FooterLinksWrapper = styled.div`
  background-color: #151515;
`;

export const FooterLinksList = styled.ul`
  ${Container};
  padding-top: 25px;
  padding-bottom: 25px;
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

export const FooterLinksItem = styled.li`
  margin: 0 8px;
`;

export const FooterLinksLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: ${PRIMARY_WHITE_COLOR};
  white-space: nowrap;
  transition: all 150ms ease-out;

  &:hover {
    color: ${PRIMARY_WHITE_COLOR} !important;
  }
`;
