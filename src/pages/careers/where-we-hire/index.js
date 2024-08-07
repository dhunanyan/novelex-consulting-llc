import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function WhereWeHire() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={PAGES_HTML["careers"]["where-we-hire"]["index"].keywords}
        />
        <meta
          name="description"
          content={PAGES_HTML["careers"]["where-we-hire"]["index"].description}
        />
        <title>{PAGES_HTML["careers"]["where-we-hire"]["index"].title}</title>
      </Head>
      <main>
        <div>Where We Hire</div>
      </main>
    </>
  );
}
