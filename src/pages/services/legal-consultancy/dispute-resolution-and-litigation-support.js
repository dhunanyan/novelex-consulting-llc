import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function DisputeResolutionAndLitigationSupport() {
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
              "dispute-resolution-and-litigation-support"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["legal-consultancy"][
              "dispute-resolution-and-litigation-support"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["legal-consultancy"][
              "dispute-resolution-and-litigation-support"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>DisputeResolutionAndLitigationSupport</div>
      </main>
    </>
  );
}
