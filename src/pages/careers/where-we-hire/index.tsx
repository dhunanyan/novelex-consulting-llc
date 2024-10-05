import Head from "next/head";

import { HtmlData } from "@data";

export default function WhereWeHire() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["careers"]["where-we-hire"]["index"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["careers"]["where-we-hire"]["index"].description}
        />
        <title>{HtmlData["careers"]["where-we-hire"]["index"].title}</title>
      </Head>
      <main>
        <div>Where We Hire</div>
      </main>
    </>
  );
}
