import Head from "next/head";

import { HtmlData } from "@data";

export default function GlobalReachLocalImpact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["where-we-hire"]["global-reach-local-impact"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["where-we-hire"]["global-reach-local-impact"]
              .description
          }
        />
        <title>
          {
            HtmlData["careers"]["where-we-hire"]["global-reach-local-impact"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>GlobalReachLocalImpact</div>
      </main>
    </>
  );
}
