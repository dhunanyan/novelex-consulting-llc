import Head from "next/head";

import { HtmlData } from "@data";

export default function PersonalAndProfessionalDevelopment() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["personal-and-professional-development"][
              "index"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["personal-and-professional-development"][
              "index"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["personal-and-professional-development"][
              "index"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>PersonalAndProfessionalDevelopment</div>
      </main>
    </>
  );
}
