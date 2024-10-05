import Head from "next/head";

import { HtmlData } from "@data";

export default function ComprehensiveFinancialAdvisoryServices() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["final-consultancy"][
              "comprehensive-financial-advisory-services"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["final-consultancy"][
              "comprehensive-financial-advisory-services"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["final-consultancy"][
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
