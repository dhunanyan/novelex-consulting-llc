import {
  Container,
  MAIN_WHITE_COLOR,
  PRIMARY_BLACK_COLOR,
  PrimaryButton,
  Title,
} from "@utils/styles";
import styled from "styled-components";

export const BlankSectionWrapper = styled.section`
  background-color: ${MAIN_WHITE_COLOR};
  color: ${PRIMARY_BLACK_COLOR};
`;

export const BlankSectionContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
`;

export const BlankSectionTitle = styled.h2`
  ${Title};
`;

export const BlankSectionDescription = styled.p`
  margin: 30px 0;
  line-height: 24px;
`;

export const BlankSectionButton = styled.button`
  ${PrimaryButton(false)};
  margin: 0 0 0 auto;
`;
