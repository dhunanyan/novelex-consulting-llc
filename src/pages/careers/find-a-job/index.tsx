import Head from "next/head";

import { HtmlData } from "@data";

export default function FindAJob() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["careers"]["find-a-job"]["index"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["careers"]["find-a-job"]["index"].description}
        />
        <title>{HtmlData["careers"]["find-a-job"]["index"].title}</title>
      </Head>
      <main>
        <div>Find a Job</div>
      </main>
    </>
  );
}
