import React from "react";
import {
  FooterNavWrapper,
  FooterNavContainer,
  FooterNavItem,
  FooterNavLink,
  FooterNavList,
  FooterNavSocialList,
  FooterNavSocialItem,
  FooterNavSocialLink,
} from "./FooterNav.styles";
import { NavigationData, SocialMediasData } from "@data";
import { getIcon } from "./getIcon";

export const FooterNav = () => {
  return (
    <FooterNavWrapper>
      <FooterNavContainer>
        <FooterNavList>
          {NavigationData.map((item) => (
            <FooterNavItem key={item.id}>
              <FooterNavLink href={"/" + item.id}>{item.text}</FooterNavLink>
            </FooterNavItem>
          ))}
        </FooterNavList>
        <FooterNavSocialList>
          {SocialMediasData.map((social) => (
            <FooterNavSocialItem key={social.id}>
              <FooterNavSocialLink href={social.url} target="_blank">
                <span>{getIcon(social.id)}</span>
              </FooterNavSocialLink>
            </FooterNavSocialItem>
          ))}
        </FooterNavSocialList>
      </FooterNavContainer>
    </FooterNavWrapper>
  );
};
