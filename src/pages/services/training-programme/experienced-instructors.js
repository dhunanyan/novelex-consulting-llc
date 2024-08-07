import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function ExperiencedInstructors() {
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
              "experienced-instructors"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["services"]["training-programme"][
              "experienced-instructors"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["services"]["training-programme"][
              "experienced-instructors"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>ExperiencedInstructors</div>
      </main>
    </>
  );
}
