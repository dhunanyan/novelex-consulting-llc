import { MAIN_WHITE_COLOR, Subtitle, Title } from "@utils/styles";
import styled from "styled-components";

export type Props = {
  justifyContent?: string;
};

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${MAIN_WHITE_COLOR};
  width: 100%;
`;

export const DropdownCloseButton = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 30px;
  cursor: pointer;
  background-color: transparent;
  color: ${MAIN_WHITE_COLOR};
`;

export const DropdownContent = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
`;

export const DropdownTitle = styled.h2`
  margin: 0 0 20px 0;
  ${Subtitle}
`;

export const DropdownDescription = styled.p`
  margin: 0 0 25px 0;
  line-height: 24px;
  font-weight: 300;
`;

export const DropdownGoToLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: grey;

  span {
    transition: all 150ms ease-out;
    margin: 0 5px 0 0;
  }

  svg {
    font-size: 25px;
    transition: all 150ms ease-out;
  }

  &:hover {
    color: ${MAIN_WHITE_COLOR};

    svg {
      transform: translate(100%, 0);
    }
  }
`;

export const DropdownNav = styled.nav<Pick<Props, "justifyContent">>`
  width: 100%;
  display: flex;
  justify-content: ${({ justifyContent = "center" }) => justifyContent};
  margin: 0 30px;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;

  &:hover a {
    opacity: 0.4;
  }
`;

export const DropdownItem = styled.li`
  display: flex;

  &:hover a {
    opacity: 1;
    transform: translate(20px, 0);
  }
`;

export const DropdownLink = styled.a`
  font-weight: 200;
  font-size: 20px;
  padding: 0 30px 30px 0;
  cursor: pointer;
  opacity: 1;
  color: ${MAIN_WHITE_COLOR};
  transition: all 150ms ease-out;
`;

export const DropdownExtraContent = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DropdownExtraContentImage = styled.div`
  margin: 0 0 30px 0;
  width: 100%;
  height: 200px;
  position: relative;
`;

export const DropdownExtraContentSubtitle = styled.h3`
  ${Subtitle}
  font-size: 18px;
  margin: 0 0 20px 0;
`;

export const DropdownExtraContentMotto = styled.h2`
  ${Title}
  font-size: 24px;
  text-transform: capitalize;
  line-height: 32px;
`;
