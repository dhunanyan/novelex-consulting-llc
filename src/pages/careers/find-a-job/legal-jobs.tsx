import Head from "next/head";

import { HtmlData } from "@data";

export default function LegalJobs() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["careers"]["find-a-job"]["legal-jobs"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["careers"]["find-a-job"]["legal-jobs"].description}
        />
        <title>{HtmlData["careers"]["find-a-job"]["legal-jobs"].title}</title>
      </Head>
      <main>
        <div>LegalJobs</div>
      </main>
    </>
  );
}
