import Head from "next/head";

import { HtmlData } from "@data";

export default function ExperiencedInstructors() {
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
              "experienced-instructors"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["services"]["training-programme"][
              "experienced-instructors"
            ].description
          }
        />
        <title>
          {
            HtmlData["services"]["training-programme"][
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
