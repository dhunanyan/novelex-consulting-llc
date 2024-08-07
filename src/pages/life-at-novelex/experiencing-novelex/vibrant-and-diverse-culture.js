import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function VibrantAndDiverseCulture() {
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
              "vibrant-and-diverse-culture"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
              "vibrant-and-diverse-culture"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["experiencing-novelex"][
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
