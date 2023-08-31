import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/temp-logo.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <div id="fb-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
