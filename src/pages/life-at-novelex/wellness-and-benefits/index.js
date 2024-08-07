import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function WellnessAndBenefits() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"]["index"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"]["index"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"]["index"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Wellness and Benefits</div>
      </main>
    </>
  );
}
