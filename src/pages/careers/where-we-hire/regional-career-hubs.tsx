import Head from "next/head";

import { HtmlData } from "@data";

export default function RegionalCareerHubs() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["where-we-hire"]["regional-career-hubs"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["where-we-hire"]["regional-career-hubs"]
              .description
          }
        />
        <title>
          {HtmlData["careers"]["where-we-hire"]["regional-career-hubs"].title}
        </title>
      </Head>
      <main>
        <div>RegionalCareerHubs</div>
      </main>
    </>
  );
}
