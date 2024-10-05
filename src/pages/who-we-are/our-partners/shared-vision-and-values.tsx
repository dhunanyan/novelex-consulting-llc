import Head from "next/head";

import { HtmlData } from "@data";

export default function SharedVisionAndValues() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["our-partners"]["shared-vision-and-values"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["our-partners"]["shared-vision-and-values"]
              .description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["our-partners"]["shared-vision-and-values"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Shared Vision and Values</div>
      </main>
    </>
  );
}
