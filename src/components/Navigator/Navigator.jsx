import React from "react";
import {
  NavigatorContainer,
  NavigatorIcon,
  NavigatorItem,
  NavigatorLink,
  NavigatorList,
  NavigatorText,
  NavigatorWrapper,
} from "./Navigator.styles";
import { MdOutlineKeyboardDoubleArrowRight as Arrow } from "react-icons/md";
import { NAVIGATOR_MAPPING } from "./utils";

export const Navigator = ({ list }) => {
  const filteredList = list.filter((item) => !!NAVIGATOR_MAPPING[item]);
  const isWrongRoute = filteredList.length !== list.length;

  return (
    <NavigatorWrapper>
      <NavigatorContainer>
        <NavigatorList>
          {filteredList.map((item, index) =>
            index !== list.length - 1 ? (
              <NavigatorItem key={index}>
                <NavigatorLink href={"/" + item}>
                  {NAVIGATOR_MAPPING[item]}
                </NavigatorLink>
                <NavigatorIcon>
                  <Arrow />
                </NavigatorIcon>
              </NavigatorItem>
            ) : (
              <NavigatorItem key={index}>
                <NavigatorText>{NAVIGATOR_MAPPING[item]}</NavigatorText>
              </NavigatorItem>
            )
          )}
          {isWrongRoute && (
            <NavigatorItem key={filteredList.length}>
              <NavigatorText>Error</NavigatorText>
            </NavigatorItem>
          )}
        </NavigatorList>
      </NavigatorContainer>
    </NavigatorWrapper>
  );
};
