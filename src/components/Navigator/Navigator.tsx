import * as React from "react";
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

import { NavigatorData } from "@data";
import { getHref } from "@utils";
import { NavigatorID } from "@types";

export type NavigatorPropsType = {
  list: string[];
};

export const Navigator = ({ list }: NavigatorPropsType) => {
  const filteredList = list.filter(
    (item) => !!NavigatorData[item as NavigatorID]
  );
  const isWrongRoute = filteredList.length !== list.length;

  return (
    <NavigatorWrapper>
      <NavigatorContainer>
        <NavigatorList>
          {filteredList.map((item, index) =>
            index !== list.length - 1 ? (
              <NavigatorItem key={index}>
                <NavigatorLink href={getHref(filteredList, index)}>
                  {NavigatorData[item as NavigatorID]}
                </NavigatorLink>
                <NavigatorIcon>
                  <Arrow />
                </NavigatorIcon>
              </NavigatorItem>
            ) : (
              <NavigatorItem key={index}>
                <NavigatorText>
                  {NavigatorData[item as NavigatorID]}
                </NavigatorText>
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
