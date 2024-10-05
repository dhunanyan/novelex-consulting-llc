import * as React from "react";
import Image from "next/image";
import {
  HeaderContact,
  HeaderContainer,
  HeaderIcon,
  HeaderLink,
  HeaderList,
  HeaderListItem,
  HeaderNav,
  HeaderSide,
  HeaderWrapper,
} from "./Header.styles";

import { NavigationData } from "@data";

export const HeaderFallback = () => {
  return (
    <HeaderWrapper>
      <div>
        <HeaderContainer>
          <HeaderIcon href="/">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/i_logo.svg"
              alt="Novelex Logo"
            />
          </HeaderIcon>
          <HeaderNav>
            <HeaderList>
              {NavigationData.map((item) => (
                <HeaderListItem key={item.id}>
                  <HeaderLink
                    isScrolled={false}
                    isViewActive={false}
                    isRouteActive={false}
                    href={item.id}
                  >
                    {item.text}
                  </HeaderLink>
                </HeaderListItem>
              ))}
            </HeaderList>
          </HeaderNav>
          <HeaderSide>
            <HeaderContact>Contact</HeaderContact>
          </HeaderSide>
        </HeaderContainer>
      </div>
    </HeaderWrapper>
  );
};
