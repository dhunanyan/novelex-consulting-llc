import Head from "next/head";

import { HtmlData } from "@data";

export default function SocialResponsibility() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["global-impact"]["social-responsibility"]
              .keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["global-impact"]["social-responsibility"]
              .description
          }
        />
        <title>
          {
            HtmlData["who-we-are"]["global-impact"]["social-responsibility"]
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
