import Head from "next/head";

import { HtmlData } from "@data";

export default function CreativityAndOpenness() {
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
              "creativity-and-openness"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["experiencing-novelex"][
              "creativity-and-openness"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["experiencing-novelex"][
              "creativity-and-openness"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Creativity and Openness</div>
      </main>
    </>
  );
}
