import Head from "next/head";

import { HtmlData } from "@data";

export default function TeamAndCultureInsights() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["team-and-culture-insights"]["index"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["team-and-culture-insights"]["index"]
              .description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["team-and-culture-insights"]["index"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Team And Culture Insights</div>
      </main>
    </>
  );
}
