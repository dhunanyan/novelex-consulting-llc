import Head from "next/head";

import { HtmlData } from "@data";

export default function ValuesAndPrinciplesAtTheCore() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["team-and-culture-insights"][
              "values-and-principles-at-the-core"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["team-and-culture-insights"][
              "values-and-principles-at-the-core"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["team-and-culture-insights"][
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
