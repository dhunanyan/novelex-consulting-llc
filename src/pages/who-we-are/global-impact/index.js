import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function GlobalImpact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={PAGES_HTML["who-we-are"]["global-impact"]["index"].keywords}
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["global-impact"]["index"].description
          }
        />
        <title>
          {PAGES_HTML["who-we-are"]["global-impact"]["index"].title}
        </title>
      </Head>
      <main>
        <div>Global Impact</div>
      </main>
    </>
  );
}
