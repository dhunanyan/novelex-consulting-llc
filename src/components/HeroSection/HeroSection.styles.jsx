import {
  BigTitle,
  Container,
  MAIN_WHITE_COLOR,
  PrimaryButton,
  Subtitle,
} from "@/utils/styles";
import styled from "styled-components";

export const HeroWrapper = styled.section`
  background-color: ${MAIN_WHITE_COLOR};
  overflow: hidden;
  padding: 95px 0 0 0;
`;

export const HeroContainer = styled.div`
  ${Container}
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

export const HeroImage = styled.div`
  width: 700px;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);

  svg {
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }
`;

export const HeroContent = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroSubtitle = styled.h3`
  ${Subtitle}
  margin: 0 0 10px 0;
`;

export const HeroTitle = styled.h1`
  ${BigTitle}
  margin: 0 0 20px 0;
`;

export const HeroDescription = styled.p`
  line-height: 22px;
`;

export const HeroButton = styled.button`
  ${PrimaryButton(false)}
`;
