import Head from "next/head";

import { HtmlData } from "@data";

export default function CelebrationWithOurCommunity() {
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
              "celebration-with-our-community"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "celebration-with-our-community"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "celebration-with-our-community"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Celebration with Our Community</div>
      </main>
    </>
  );
}
