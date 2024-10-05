import {
  BigTitle,
  Container,
  MAIN_COLOR,
  MAIN_WHITE_COLOR,
  Subtitle,
} from "@utils/styles";
import styled from "styled-components";

export const ImageCardsWrapper = styled.section`
  background-color: ${MAIN_WHITE_COLOR};
`;

export const ImageCardsContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageCardsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 0 20px 0;
  width: 700px;
`;

export const ImageCardsTitle = styled.h2`
  ${BigTitle}
  margin: 0 0 20px 0;
  color: ${MAIN_COLOR};
`;

export const ImageCardsSubtitle = styled.h3`
  ${Subtitle};
  font-weight: 100;
`;

export const ImageCardsCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;
`;
