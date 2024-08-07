import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ComprehensiveFinancialAdvisoryServices() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["final-consultancy"][
              "comprehensive-financial-advisory-services"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["final-consultancy"][
              "comprehensive-financial-advisory-services"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["final-consultancy"][
              "comprehensive-financial-advisory-services"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ComprehensiveFinancialAdvisoryServices</div>
      </main>
    </>
  );
}
