import Head from "next/head";

import { HtmlData } from "@data";

export default function DisputeResolutionAndLitigationSupport() {
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
              "dispute-resolution-and-litigation-support"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["legal-consultancy"][
              "dispute-resolution-and-litigation-support"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["legal-consultancy"][
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
