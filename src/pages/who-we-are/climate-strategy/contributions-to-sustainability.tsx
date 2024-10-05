import Head from "next/head";

import { HtmlData } from "@data";

export default function ContributionsToSustainability() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["climate-strategy"][
              "contributions-to-sustainability"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["climate-strategy"][
              "contributions-to-sustainability"
            ].description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["climate-strategy"][
              "contributions-to-sustainability"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Contributions to Sustainability</div>
      </main>
    </>
  );
}
