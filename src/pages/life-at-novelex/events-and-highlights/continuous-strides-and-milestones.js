import Head from "next/head";

import { HtmlData } from "@data";

export default function ContinuousStridesAndMilestones() {
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
              "continuous-strides-and-milestones"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "continuous-strides-and-milestones"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["events-and-highlights"][
              "continuous-strides-and-milestones"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>Continuous Strides and Milestones</div>
      </main>
    </>
  );
}
