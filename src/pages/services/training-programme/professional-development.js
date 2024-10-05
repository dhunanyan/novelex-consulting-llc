import Head from "next/head";

import { HtmlData } from "@data";

export default function ProfessionalDevelopment() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["services"]["training-programme"][
              "professional-development"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["training-programme"][
              "professional-development"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["training-programme"][
              "professional-development"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ProfessionalDevelopment</div>
      </main>
    </>
  );
}
