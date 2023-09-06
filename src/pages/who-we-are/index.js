import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { BlankSection } from "@/components/BlankSection/BlankSection";

export default function HomePage({ welcomeSection, blankSection }) {
  if (!welcomeSection || !blankSection) {
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
          content={blankSection.content}
          SVGs={blankSection.SVGs}
          images={blankSection.images}
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
  const blankSection = await getCurrentContentfulType(
    "blankSection",
    "whoWeAre"
  );
  // const imageCardsSection = await getCurrentContentfulType("imageCardsSection");
  // const services = await getCurrentContentfulType(
  //   "iconCardsSection",
  //   "services"
  // );

  return { props: { welcomeSection, blankSection } };
}
