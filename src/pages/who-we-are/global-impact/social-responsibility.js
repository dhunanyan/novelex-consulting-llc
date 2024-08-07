import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function SocialResponsibility() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["global-impact"]["social-responsibility"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["global-impact"]["social-responsibility"]
              .description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["global-impact"]["social-responsibility"]
              .title
          }
        </title>
      </Head>
      <main>
        <div>Social Responsibility</div>
      </main>
    </>
  );
}
