import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ContributeToProfessionalDevelopmentPrograms() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["careers"]["become-a-trainer"][
              "contribute-to-professional-development-programs"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["careers"]["become-a-trainer"][
              "contribute-to-professional-development-programs"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["careers"]["become-a-trainer"][
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
