import Head from "next/head";

import { HtmlData } from "@data";

export default function MutualGrowthEndeavors() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["our-partners"]["mutual-growth-endeavors"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["our-partners"]["mutual-growth-endeavors"]
              .description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["our-partners"]["mutual-growth-endeavors"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Mutual Growth Endeavors</div>
      </main>
    </>
  );
}
