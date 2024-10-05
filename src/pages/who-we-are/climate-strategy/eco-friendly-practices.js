import Head from "next/head";

import { HtmlData } from "@data";

export default function EcoFriendlyPractices() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["climate-strategy"]["eco-friendly-practices"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["climate-strategy"]["eco-friendly-practices"]
              .description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["climate-strategy"]["eco-friendly-practices"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Eco-Friendly Practices</div>
      </main>
    </>
  );
}
