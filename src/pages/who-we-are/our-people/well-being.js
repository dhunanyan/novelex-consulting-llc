import Head from "next/head";

import { HtmlData } from "@data";

export default function WellBeing() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["who-we-are"]["our-people"]["well-being"].keywords}
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["our-people"]["well-being"].description
          }
        />
        <title>
          {HtmlData["who-we-are"]["our-people"]["well-being"].title}
        </title>
      </Head>
      <main>
        <div>Well Being</div>
      </main>
    </>
  );
}
