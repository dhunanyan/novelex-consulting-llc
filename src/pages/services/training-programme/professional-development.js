import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ProfessionalDevelopment() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["services"]["training-programme"][
              "professional-development"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["training-programme"][
              "professional-development"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["training-programme"][
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
