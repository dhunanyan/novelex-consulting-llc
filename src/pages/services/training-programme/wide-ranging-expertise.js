import Head from "next/head";

import { HtmlData } from "@data";

export default function WideRangingExpertise() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["training-programme"]["wide-ranging-expertise"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["training-programme"]["wide-ranging-expertise"]
              .description
          }
        />
        <title>
          {
            HtmlData["services"]["training-programme"]["wide-ranging-expertise"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>WideRangingExpertise</div>
      </main>
    </>
  );
}
