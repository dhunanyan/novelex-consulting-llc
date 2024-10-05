import * as React from "react";
import { Header } from "@components/Header/Header";
import { HeaderLayout } from "@components/Header/HeaderLayout/HeaderLayout";
import { HtmlData } from "@data";
import { Navigator } from "@components/Navigator/Navigator";
import { Footer } from "@components/Footer/Footer";

export const metadata = HtmlData["index"];

export type RootLayoutPropsType = {
  children: React.JSX.Element;
};

export default function RootLayout({ children }: RootLayoutPropsType) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/icons/i_logo.svg"
        />
        <meta name="theme-color" content="#000000" />
      </head>
      <header>
        <Header />
        <HeaderLayout />
        <Navigator />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
