import Head from "next/head";

import { HtmlData } from "@data";

export default function VibrantAndDiverseCulture() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["experiencing-novelex"][
              "vibrant-and-diverse-culture"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["experiencing-novelex"][
              "vibrant-and-diverse-culture"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["experiencing-novelex"][
              "vibrant-and-diverse-culture"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Vibrant And Diverse Culture</div>
      </main>
    </>
  );
}
