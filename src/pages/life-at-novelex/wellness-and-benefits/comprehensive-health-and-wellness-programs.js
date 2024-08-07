import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ComprehensiveHealthAndWellnessPrograms() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"][
              "comprehensive-health-and-wellness-programs"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"][
              "comprehensive-health-and-wellness-programs"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"][
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
