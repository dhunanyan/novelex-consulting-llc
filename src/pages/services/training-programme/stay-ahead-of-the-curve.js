import Head from "next/head";

import { HtmlData } from "@data";

export default function StayAheadOfTheCurve() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["training-programme"][
              "stay-ahead-of-the-curve"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["training-programme"][
              "stay-ahead-of-the-curve"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["training-programme"][
              "stay-ahead-of-the-curve"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>StayAheadOfTheCurve</div>
      </main>
    </>
  );
}
