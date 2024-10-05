import Head from "next/head";

import { HtmlData } from "@data";

export default function FinancialPlanningAndRiskManagement() {
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
              "financial-planning-and-risk-management"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["final-consultancy"][
              "financial-planning-and-risk-management"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["final-consultancy"][
              "financial-planning-and-risk-management"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>FinancialPlanningAndRiskManagement</div>
      </main>
    </>
  );
}
