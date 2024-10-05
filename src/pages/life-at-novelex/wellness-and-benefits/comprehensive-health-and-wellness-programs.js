import Head from "next/head";

import { HtmlData } from "@data";

export default function ComprehensiveHealthAndWellnessPrograms() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
              "comprehensive-health-and-wellness-programs"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
              "comprehensive-health-and-wellness-programs"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
              "comprehensive-health-and-wellness-programs"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ComprehensiveHealthAndWellnessPrograms</div>
      </main>
    </>
  );
}
