import styled from "styled-components";
import {
  Container,
  Title,
  PrimaryButton,
  Subtitle,
  MAIN_BLACK_COLOR,
  MAIN_WHITE_COLOR,
  SECONDARY_BLACK_COLOR,
} from "@/utils/styles";

export const ServicesWrapper = styled.section`
  background-color: ${MAIN_BLACK_COLOR};
  color: ${MAIN_WHITE_COLOR};
`;

export const ServicesContainer = styled.div`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${SECONDARY_BLACK_COLOR};
  padding: 20px;
  margin: 0 0 0 30px;
`;

export const ServicesSubtitle = styled.h3`
  ${Subtitle}
  margin: 0 0 10px 0;
`;

export const ServicesTitle = styled.h2`
  ${Title}
  margin: 0 0 20px 0;
`;

export const ServicesDescription = styled.p`
  line-height: 22px;
`;

export const ServicesButton = styled.button`
  ${PrimaryButton(true)}
`;

export const ServicesCards = styled.div`
  min-width: 550px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 20px 0 0;

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
