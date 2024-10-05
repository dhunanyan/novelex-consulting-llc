import Head from "next/head";

import { HtmlData } from "@data";

export default function CraftYourCareerStoryPersonalizedGrowthPathsAwait() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["explore-career-opportunities"][
              "craft-your-career-story"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["explore-career-opportunities"][
              "craft-your-career-story"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["explore-career-opportunities"][
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
