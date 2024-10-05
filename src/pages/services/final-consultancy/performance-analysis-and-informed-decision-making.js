import Head from "next/head";

import { HtmlData } from "@data";

export default function PerformanceAnalysisAndInformedDecisionMaking() {
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
              "performance-analysis-and-informed-decision-making"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["final-consultancy"][
              "performance-analysis-and-informed-decision-making"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["final-consultancy"][
              "performance-analysis-and-informed-decision-making"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>PerformanceAnalysisAndInformedDecisionMaking</div>
      </main>
    </>
  );
}
