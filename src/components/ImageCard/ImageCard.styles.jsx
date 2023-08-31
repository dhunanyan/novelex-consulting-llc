import { MAIN_COLOR, MAIN_WHITE_COLOR, Subtitle } from "@/utils/styles";
import styled from "styled-components";

export const ImageCardContainer = styled.a`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  width: calc((100% / 3) - 10px);
  height: 320px;
  min-width: 320px;
  margin: 20px 0 0 0;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.47);
  transition: all 180ms ease-in-out;

  &:hover {
    > div {
      background-color: rgba(0, 0, 0, 0.7);

      h3 {
        opacity: 0.9;
        letter-spacing: 8px;
        color: ${MAIN_COLOR};
      }

      svg {
        transform: scale(1.2);
        opacity: 0.9;
        color: ${MAIN_COLOR};
      }
    }
  }
`;

export const ImageCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  padding: 0 20px;
  transition: all 150ms ease-out;
`;

export const ImageCardTitle = styled.h3`
  ${Subtitle}
  font-weight: 900;
  letter-spacing: 4px;
  color: ${MAIN_WHITE_COLOR};
  margin: 30px 0 auto 0;
  opacity: 0.7;
  transition: all 150ms ease-out;
`;

export const ImageCardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 0 0 auto 0;
  padding: 0 0 30px 0;

  svg {
    transition: all 150ms ease-out;
    width: 100%;
    height: 100%;
    color: ${MAIN_WHITE_COLOR};
    opacity: 0.6;
  }
`;
