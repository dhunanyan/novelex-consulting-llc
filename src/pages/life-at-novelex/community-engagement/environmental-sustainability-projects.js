import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function EnvironmentalSustainabilityProjects() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["community-engagement"][
              "environmental-sustainability-projects"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["community-engagement"][
              "environmental-sustainability-projects"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["community-engagement"][
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
