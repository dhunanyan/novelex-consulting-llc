import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function TeamGrowthIsPersonalGrowth() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["join-our-team"][
              "team-growth-is-personal-growth"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["join-our-team"][
              "team-growth-is-personal-growth"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["join-our-team"][
              "team-growth-is-personal-growth"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>TeamGrowthIsPersonalGrowth</div>
      </main>
    </>
  );
}
