import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function StrategicCollaborations() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["our-partners"]["strategic-collaborations"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["our-partners"]["strategic-collaborations"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["our-partners"]["strategic-collaborations"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Strategic Collaborations</div>
      </main>
    </>
  );
}
