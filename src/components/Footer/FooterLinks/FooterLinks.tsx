import * as React from "react";
import {
  FooterLinksItem,
  FooterLinksLink,
  FooterLinksList,
  FooterLinksWrapper,
} from "./FooterLinks.styles";
import { FooterData } from "@data";

export const FooterLinks = () => (
  <FooterLinksWrapper>
    <FooterLinksList>
      {FooterData.map((item) => (
        <FooterLinksItem key={item.id}>
          <FooterLinksLink href={item.id}>{item.text}</FooterLinksLink>
        </FooterLinksItem>
      ))}
    </FooterLinksList>
  </FooterLinksWrapper>
);
