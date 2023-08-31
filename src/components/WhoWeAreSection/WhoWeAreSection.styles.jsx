import styled from "styled-components";
import {
  Container,
  Title,
  PrimaryButton,
  Subtitle,
  MAIN_BLACK_COLOR,
  MAIN_WHITE_COLOR,
} from "@/utils/styles";

export const WhoWeAreWrapper = styled.section`
  background-color: ${MAIN_BLACK_COLOR};
  color: ${MAIN_WHITE_COLOR};
`;

export const WhoWeAreContainer = styled.div`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const WhoWeAreContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WhoWeAreSubtitle = styled.h3`
  ${Subtitle}
  margin: 0 0 10px 0;
`;

export const WhoWeAreTitle = styled.h2`
  ${Title}
  margin: 0 0 20px 0;
`;

export const WhoWeAreDescription = styled.p`
  line-height: 22px;
`;

export const WhoWeAreButton = styled.button`
  ${PrimaryButton(true)}
`;

export const WhoWeAreCards = styled.div`
  min-width: 550px;
  margin: 0 0 0 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 0 0 20px;

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
