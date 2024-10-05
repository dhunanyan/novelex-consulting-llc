import Head from "next/head";

import { HtmlData } from "@data";

export default function ComprehensiveLegalAdvisory() {
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
              "comprehensive-legal-advisory"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["legal-consultancy"][
              "comprehensive-legal-advisory"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["legal-consultancy"][
              "comprehensive-legal-advisory"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ComprehensiveLegalAdvisory</div>
      </main>
    </>
  );
}
