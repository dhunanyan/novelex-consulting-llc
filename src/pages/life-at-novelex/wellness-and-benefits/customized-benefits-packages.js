import Head from "next/head";

import { HtmlData } from "@data";

export default function CustomizedBenefitsPackages() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
              "customized-benefits-packages"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
              "customized-benefits-packages"
            ].description
          }
        />
        <title>
          {
            HtmlData["life-at-novelex"]["wellness-and-benefits"][
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
