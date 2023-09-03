import styled, { css } from "styled-components";
import {
  Container,
  Title,
  PrimaryButton,
  Subtitle,
  MAIN_BLACK_COLOR,
  MAIN_WHITE_COLOR,
} from "@/utils/styles";

export const IconCardsWrapper = styled.section`
  background-color: ${MAIN_BLACK_COLOR};
  color: ${MAIN_WHITE_COLOR};
`;

export const IconCardsContainer = styled.div`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const switchedOrderStyles = (order) => css`
  order: ${order};
  padding: 20px;
  margin: 0 0 0 30px;
`;

export const IconCardsContent = styled.div`
  ${({ order }) => (order !== 0 ? switchedOrderStyles(order) : "")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const IconCardsSubtitle = styled.h3`
  ${Subtitle}
  margin: 0 0 10px 0;
`;

export const IconCardsTitle = styled.h2`
  ${Title}
  margin: 0 0 20px 0;
`;

export const IconCardsDescription = styled.p`
  line-height: 22px;
`;

export const IconCardsButton = styled.button`
  ${PrimaryButton(true)}
`;

export const IconCardsCards = styled.div`
  min-width: 550px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: ${({ order }) => (order === 0 ? "0 0 0 20px" : "0 20px 0 0")};

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;

    &:first-of-type {
      margin-top: 50px;
    }

    &:last-of-type {
      margin-bottom: 50px;
    }
  }
`;
