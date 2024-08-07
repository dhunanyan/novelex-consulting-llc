import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function GreenInitiatives() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["climate-strategy"]["green-initiatives"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["climate-strategy"]["green-initiatives"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["climate-strategy"]["green-initiatives"]
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
