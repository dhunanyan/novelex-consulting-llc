import React from "react";
import {
  NavigatorContainer,
  NavigatorIcon,
  NavigatorItem,
  NavigatorLink,
  NavigatorList,
  NavigatorWrapper,
} from "./Navigator.styles";
import { MdOutlineKeyboardDoubleArrowRight as Arrow } from "react-icons/md";
const LIST = ["asdasd", "asdasd", "asdasdas"];

export const Navigator = () => {
  return (
    <NavigatorWrapper>
      <NavigatorContainer>
        <NavigatorList>
          {LIST.map((item, index) => (
            <NavigatorItem>
              <NavigatorLink>{item}</NavigatorLink>
              {index !== LIST.length - 1 && (
                <NavigatorIcon>
                  <Arrow />
                </NavigatorIcon>
              )}
            </NavigatorItem>
          ))}
        </NavigatorList>
      </NavigatorContainer>
    </NavigatorWrapper>
  );
};
