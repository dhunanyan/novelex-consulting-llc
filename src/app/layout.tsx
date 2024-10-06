import * as React from "react";
import { HtmlData } from "@data";
import { Header, Footer, HeaderFallback } from "@components";

import "./globals.scss";

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
        <React.Suspense fallback={<HeaderFallback />}>
          <Header />
        </React.Suspense>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </html>
  );
}
