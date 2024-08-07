import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function InsightsIntoSignificantAchievements() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["events-and-highlights"][
              "insights-into-significant-achievements"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["events-and-highlights"][
              "insights-into-significant-achievements"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["events-and-highlights"][
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
