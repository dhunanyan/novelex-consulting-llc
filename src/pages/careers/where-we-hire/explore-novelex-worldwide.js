import Head from "next/head";

import { HtmlData } from "@data";

export default function ExploreNovelexWorldwide() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["where-we-hire"]["explore-novelex-worldwide"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["where-we-hire"]["explore-novelex-worldwide"]
              .description
          }
        />
        <title>
          {
            HtmlData["careers"]["where-we-hire"]["explore-novelex-worldwide"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>ExploreNovelexWorldwide</div>
      </main>
    </>
  );
}
