import Head from "next/head";

import { HtmlData } from "@data";

export default function DiversityAndInclusion() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["diversity-and-inclusion"]["index"].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["diversity-and-inclusion"]["index"]
              .description
          }
        />
        <title>
          {HtmlData["who-we-are"]["diversity-and-inclusion"]["index"].title}
        </title>
      </Head>
      <main>
        <div>Diversity and Inclusion</div>
      </main>
    </>
  );
}
