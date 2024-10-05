import Head from "next/head";

import { HtmlData } from "@data";

export default function PersonalStoriesAndExperiences() {
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
              "personal-stories-and-experiences"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["team-and-culture-insights"][
              "personal-stories-and-experiences"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["team-and-culture-insights"][
              "personal-stories-and-experiences"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>PersonalStoriesAndExperiences</div>
      </main>
    </>
  );
}
