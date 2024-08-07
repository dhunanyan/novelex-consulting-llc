import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function LeveragingDiversity() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["global-impact"]["leveraging-diversity"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["global-impact"]["leveraging-diversity"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["global-impact"]["leveraging-diversity"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Leveraging Diversity</div>
      </main>
    </>
  );
}
