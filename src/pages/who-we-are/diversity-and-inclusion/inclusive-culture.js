import Head from "next/head";

import { HtmlData } from "@data";

export default function InclusiveCulture() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["diversity-and-inclusion"][
              "inclusive-culture"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["diversity-and-inclusion"][
              "inclusive-culture"
            ].description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["diversity-and-inclusion"][
              "inclusive-culture"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Inclusive Culture</div>
      </main>
    </>
  );
}
