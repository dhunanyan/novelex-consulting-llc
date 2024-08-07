import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function GlobalPerspective() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["diversity-and-inclusion"][
              "global-perspective"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["diversity-and-inclusion"][
              "global-perspective"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["diversity-and-inclusion"][
              "global-perspective"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Global Perspective</div>
      </main>
    </>
  );
}
