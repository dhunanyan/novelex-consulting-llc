import Head from "next/head";

import { HtmlData } from "@data";

export default function CultureOfInclusivity() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["our-people"]["culture-of-inclusivity"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["our-people"]["culture-of-inclusivity"]
              .description
          }
        />
        <title>
          {HtmlData["who-we-are"]["our-people"]["culture-of-inclusivity"].title}
        </title>
      </Head>
      <main>
        <div>Culture Of Inclusivity</div>
      </main>
    </>
  );
}
