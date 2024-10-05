import Head from "next/head";

import { HtmlData } from "@data";

export default function ContributeToProfessionalDevelopmentPrograms() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["careers"]["become-a-trainer"][
              "contribute-to-professional-development-programs"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["careers"]["become-a-trainer"][
              "contribute-to-professional-development-programs"
            ].description
          }
        />
        <title>
          {
            HtmlData["careers"]["become-a-trainer"][
              "contribute-to-professional-development-programs"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ContributeToProfessionalDevelopmentPrograms</div>
      </main>
    </>
  );
}
