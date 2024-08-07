import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function Empowerment() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["diversity-and-inclusion"]["empowerment"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["diversity-and-inclusion"]["empowerment"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["diversity-and-inclusion"]["empowerment"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Empowerment</div>
      </main>
    </>
  );
}
