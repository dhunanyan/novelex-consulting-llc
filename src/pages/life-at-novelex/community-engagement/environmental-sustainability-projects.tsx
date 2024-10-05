import Head from "next/head";

import { HtmlData } from "@data";

export default function EnvironmentalSustainabilityProjects() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["community-engagement"][
              "environmental-sustainability-projects"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["community-engagement"][
              "environmental-sustainability-projects"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["community-engagement"][
              "environmental-sustainability-projects"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>EnvironmentalSustainabilityProjects</div>
      </main>
    </>
  );
}
