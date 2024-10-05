import Head from "next/head";

import { HtmlData } from "@data";

export default function GreenInitiatives() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["climate-strategy"]["green-initiatives"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["climate-strategy"]["green-initiatives"]
              .description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["climate-strategy"]["green-initiatives"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Green Initiatives</div>
      </main>
    </>
  );
}
