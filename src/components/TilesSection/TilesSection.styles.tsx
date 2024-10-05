import {
  Container,
  MAIN_BLACK_COLOR,
  MAIN_WHITE_COLOR,
  Subtitle,
  Title,
} from "@utils/styles";
import styled from "styled-components";

export const TilesSectionWrapper = styled.section`
  background-color: ${MAIN_BLACK_COLOR};
  color: ${MAIN_WHITE_COLOR};
`;

export const TilesSectionContainer = styled.div`
  ${Container};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TilesSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 0 60px 0;
`;

export const TilesSectionTitle = styled.h1`
  ${Title};
  margin: 0 0 10px 0;
`;

export const TilesSectionDescription = styled.p`
  ${Subtitle}
  text-transform: none;
  font-size: 20px;
`;

export const TilesSectionPreview = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: max-content;
  min-height: 685px;
  margin: 60px 0;
`;

export const TilesSectionCollection = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  transition: all 150ms ease-out;

  &:hover {
    > div {
      opacity: 0.6;
    }
  }
`;

export const TilesSelectionImage = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  z-index: 0;
  max-width: 600px;
  box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.47);
`;
