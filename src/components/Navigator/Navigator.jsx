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

export const Navigator = ({ list }) => {
  return (
    <NavigatorWrapper>
      <NavigatorContainer>
        <NavigatorList>
          {list.map((item, index) => (
            <NavigatorItem key={index}>
              <NavigatorLink>{item}</NavigatorLink>
              {index !== list.length - 1 && (
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
