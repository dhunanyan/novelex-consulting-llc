import Head from "next/head";

import { HtmlData } from "@data";

export default function FinancialConsultancy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["services"]["final-consultancy"]["index"].keywords}
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["final-consultancy"]["index"].description
          }
        />
        <title>
          {HtmlData["services"]["final-consultancy"]["index"].title}
        </title>
      </Head>
      <main>
        <div>Financial Consultancy</div>
      </main>
    </>
  );
}
