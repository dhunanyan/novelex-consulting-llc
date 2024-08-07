import React from "react";
import {
  FooterLinksItem,
  FooterLinksLink,
  FooterLinksList,
  FooterLinksWrapper,
} from "./FooterLinks.styles";
import { FOOTER_LINKS } from "@/data";

export const FooterLinks = () => (
  <FooterLinksWrapper>
    <FooterLinksList>
      {FOOTER_LINKS.map((item) => (
        <FooterLinksItem key={item.id}>
          <FooterLinksLink href={item.id}>{item.text}</FooterLinksLink>
        </FooterLinksItem>
      ))}
    </FooterLinksList>
  </FooterLinksWrapper>
);
