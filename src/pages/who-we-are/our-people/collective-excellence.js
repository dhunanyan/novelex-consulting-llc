import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function CollectiveExcellence() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["our-people"]["collective-excellence"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["our-people"]["collective-excellence"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["our-people"]["collective-excellence"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Collective Excellence</div>
      </main>
    </>
  );
}
