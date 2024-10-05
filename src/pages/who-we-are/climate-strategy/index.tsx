import Head from "next/head";

import { HtmlData } from "@data";

export default function ClimateStrategy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["who-we-are"]["climate-strategy"]["index"].keywords}
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["climate-strategy"]["index"].description
          }
        />
        <title>
          {HtmlData["who-we-are"]["climate-strategy"]["index"].title}
        </title>
      </Head>
      <main>
        <div>Climate Strategy</div>
      </main>
    </>
  );
}
