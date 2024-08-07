import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ComprehensiveLegalAdvisory() {
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
              "comprehensive-legal-advisory"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["legal-consultancy"][
              "comprehensive-legal-advisory"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["legal-consultancy"][
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
