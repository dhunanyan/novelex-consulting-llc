import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function TeamAndCultureInsights() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["team-and-culture-insights"]["index"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["team-and-culture-insights"]["index"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["team-and-culture-insights"]["index"]
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
