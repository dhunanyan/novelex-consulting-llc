import Head from "next/head";

import { HtmlData } from "@data";

export default function ExploreCareerOpportunities() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["explore-career-opportunities"]["index"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["explore-career-opportunities"]["index"]
              .description
          }
        />
        <title>
          {HtmlData["careers"]["explore-career-opportunities"]["index"].title}
        </title>
      </Head>
      <main>
        <div>Explore Career Opportunities</div>
      </main>
    </>
  );
}
