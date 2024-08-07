import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function CelebrationWithOurCommunity() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["events-and-highlights"][
              "celebration-with-our-community"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["events-and-highlights"][
              "celebration-with-our-community"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["events-and-highlights"][
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
