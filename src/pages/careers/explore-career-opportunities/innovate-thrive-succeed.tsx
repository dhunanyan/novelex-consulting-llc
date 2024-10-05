import Head from "next/head";

import { HtmlData } from "@data";

export default function InnovateThriveSucceed() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["explore-career-opportunities"][
              "innovate-thrive-succeed"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["explore-career-opportunities"][
              "innovate-thrive-succeed"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["explore-career-opportunities"][
              "innovate-thrive-succeed"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>InnovateThriveSucceed</div>
      </main>
    </>
  );
}
