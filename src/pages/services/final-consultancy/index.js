import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function FinancialConsultancy() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["final-consultancy"]["index"].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["final-consultancy"]["index"].description
          }
        />
        <title>
          {PAGES_HTML["services"]["final-consultancy"]["index"].title}
        </title>
      </Head>
      <main>
        <div>Financial Consultancy</div>
      </main>
    </>
  );
}
