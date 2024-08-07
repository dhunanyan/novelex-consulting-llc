import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function EventsAndHighlights() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["events-and-highlights"]["index"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["events-and-highlights"]["index"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["events-and-highlights"]["index"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Events And Highlights</div>
      </main>
    </>
  );
}
