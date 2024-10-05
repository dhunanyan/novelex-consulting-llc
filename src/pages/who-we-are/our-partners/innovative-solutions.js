import Head from "next/head";

import { HtmlData } from "@data";

export default function InnovativeSolutions() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["our-partners"]["innovative-solutions"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["our-partners"]["innovative-solutions"]
              .description
          }
        />
        <title>
          {HtmlData["who-we-are"]["our-partners"]["innovative-solutions"].title}
        </title>
      </Head>
      <main>
        <div>Innovative Solutions</div>
      </main>
    </>
  );
}
