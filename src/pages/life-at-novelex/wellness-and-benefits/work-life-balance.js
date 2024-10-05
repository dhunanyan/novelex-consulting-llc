import Head from "next/head";

import { HtmlData } from "@data";

export default function WorkLifeBalance() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
              "work-life-balance"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
              "work-life-balance"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
              "work-life-balance"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>WorkLifeBalance</div>
      </main>
    </>
  );
}
