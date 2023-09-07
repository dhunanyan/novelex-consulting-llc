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
import { useRouter } from "next/router";

export const Navigator = ({ list }) => {
  const router = useRouter();
  const onLinkClick = (e, id) => {
    e.preventDefault();
    router.replace(id);
  };
  const filteredList = list.filter((item) => !!NAVIGATOR_MAPPING[item]);
  const isWrongRoute = filteredList.length !== list.length;

  console.log(list, filteredList);

  return (
    <NavigatorWrapper>
      <NavigatorContainer>
        <NavigatorList>
          {filteredList.map((item, index) =>
            index !== list.length - 1 ? (
              <NavigatorItem key={index}>
                <NavigatorLink onClick={(e) => onLinkClick(e, item)}>
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
