import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { BlankSection } from "@/components/BlankSection/BlankSection";
import { TilesSection } from "@/components/TilesSection/TilesSection";

export default function HomePage({
  welcomeSection,
  blankSection0,
  tilesSection,
  blankSection1,
}) {
  if (!welcomeSection || !blankSection0 || !tilesSection || !blankSection1) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/temp-logo.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <title>Novelex Consulting LLC</title>
      </Head>
      <main>
        <HeroSection
          content={welcomeSection.content}
          SVGs={welcomeSection.SVGs}
          images={welcomeSection.images}
        />
        <BlankSection
          content={blankSection0.content}
          images={blankSection0.images}
        />
        <TilesSection
          content={tilesSection.content}
          images={tilesSection.images}
        />
        <BlankSection
          content={blankSection1.content}
          images={blankSection1.images}
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const welcomeSection = await getCurrentContentfulType(
    "welcomeSection",
    "whoWeAre"
  );
  const blankSection0 = await getCurrentContentfulType(
    "blankSection",
    "whoWeAre",
    0
  );
  const tilesSection = await getCurrentContentfulType(
    "tilesSection",
    "whoWeAre"
  );
  const blankSection1 = await getCurrentContentfulType(
    "blankSection",
    "whoWeAre",
    1
  );

  return {
    props: { welcomeSection, blankSection0, tilesSection, blankSection1 },
  };
}
