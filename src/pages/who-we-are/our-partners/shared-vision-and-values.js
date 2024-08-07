import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function SharedVisionAndValues() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["our-partners"]["shared-vision-and-values"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["our-partners"]["shared-vision-and-values"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["our-partners"]["shared-vision-and-values"]
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
