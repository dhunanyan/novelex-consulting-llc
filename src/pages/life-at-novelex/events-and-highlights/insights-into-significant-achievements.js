import Head from "next/head";

import { HtmlData } from "@data";

export default function InsightsIntoSignificantAchievements() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "insights-into-significant-achievements"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "insights-into-significant-achievements"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "insights-into-significant-achievements"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Insights into Significant Achievements</div>
      </main>
    </>
  );
}
