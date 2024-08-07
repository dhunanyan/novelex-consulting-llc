import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function CreativityAndOpenness() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
              "creativity-and-openness"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
              "creativity-and-openness"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
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
