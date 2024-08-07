import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ValuesAndPrinciplesAtTheCore() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["team-and-culture-insights"][
              "values-and-principles-at-the-core"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["team-and-culture-insights"][
              "values-and-principles-at-the-core"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["team-and-culture-insights"][
              "values-and-principles-at-the-core"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ValuesAndPrinciplesAtTheCore</div>
      </main>
    </>
  );
}
