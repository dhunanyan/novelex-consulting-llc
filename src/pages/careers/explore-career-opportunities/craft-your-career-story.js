import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function CraftYourCareerStoryPersonalizedGrowthPathsAwait() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["explore-career-opportunities"][
              "craft-your-career-story"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["explore-career-opportunities"][
              "craft-your-career-story"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["explore-career-opportunities"][
              "craft-your-career-story"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>CraftYourCareerStoryPersonalizedGrowthPathsAwait</div>
      </main>
    </>
  );
}
