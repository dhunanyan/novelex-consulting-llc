import {
  BigTitle,
  Container,
  MAIN_COLOR,
  MAIN_WHITE_COLOR,
  Subtitle,
} from "@/utils/styles";
import styled from "styled-components";

export const ManageWrapper = styled.section`
  background-color: ${MAIN_WHITE_COLOR};
`;

export const ManageContainer = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ManageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 0 20px 0;
  width: 700px;
`;

export const ManageTitle = styled.h2`
  ${BigTitle}
  margin: 0 0 20px 0;
  color: ${MAIN_COLOR};
`;

export const ManageSubtitle = styled.h3`
  ${Subtitle};
  font-weight: 100;
`;

export const ManageCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;
`;
