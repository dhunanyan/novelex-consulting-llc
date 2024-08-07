import Head from "next/head";

import { PAGES_HTML } from "@/data";

export default function EducationalInitiativesAndSkillBuildingPrograms() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["life-at-novelex"]["community-engagement"][
              "educational-initiatives-and-skill-building-programs"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["life-at-novelex"]["community-engagement"][
              "educational-initiatives-and-skill-building-programs"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["life-at-novelex"]["community-engagement"][
              "educational-initiatives-and-skill-building-programs"
            ].title
          }
        </title>
      </Head>
      <main>
        <div>EducationalInitiativesAndSkillBuildingPrograms</div>
      </main>
    </>
  );
}
