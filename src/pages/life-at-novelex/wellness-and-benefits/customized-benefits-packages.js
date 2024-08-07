import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function CustomizedBenefitsPackages() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"][
              "customized-benefits-packages"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"][
              "customized-benefits-packages"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["wellness-and-benefits"][
              "customized-benefits-packages"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>CustomizedBenefitsPackages</div>
      </main>
    </>
  );
}
