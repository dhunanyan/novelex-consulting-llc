import Head from "next/head";

import { HtmlData } from "@data";

export default function ShowcasingInnovationsAndDevelopments() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "showcasing-innovations-and-developments"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "showcasing-innovations-and-developments"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "showcasing-innovations-and-developments"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Showcasing Innovations and Developments</div>
      </main>
    </>
  );
}
