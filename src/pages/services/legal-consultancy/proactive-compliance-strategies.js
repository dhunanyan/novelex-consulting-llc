import Head from "next/head";

import { HtmlData } from "@data";

export default function ProactiveComplianceStrategies() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["legal-consultancy"][
              "proactive-compliance-strategies"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["legal-consultancy"][
              "proactive-compliance-strategies"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["legal-consultancy"][
              "proactive-compliance-strategies"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ProactiveComplianceStrategies</div>
      </main>
    </>
  );
}
