import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function GlobalReachLocalImpact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["where-we-hire"]["global-reach-local-impact"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["where-we-hire"]["global-reach-local-impact"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["where-we-hire"]["global-reach-local-impact"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>GlobalReachLocalImpact</div>
      </main>
    </>
  );
}
