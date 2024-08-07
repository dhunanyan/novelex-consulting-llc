import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ProactiveComplianceStrategies() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["legal-consultancy"][
              "proactive-compliance-strategies"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["legal-consultancy"][
              "proactive-compliance-strategies"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["legal-consultancy"][
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
