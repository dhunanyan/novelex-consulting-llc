import React from "react";
import { FooterNav } from "./FooterNav/FooterNav";
import { FooterLinks } from "./FooterLinks/FooterLinks";
import { FooterWrapper } from "./Footer.styles";

export const Footer = () => (
  <FooterWrapper>
    <FooterNav />
    <FooterLinks />
  </FooterWrapper>
);
