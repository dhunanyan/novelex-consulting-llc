import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { BlankSection } from "@/components/BlankSection/BlankSection";
import { TilesSection } from "@/components/TilesSection/TilesSection";
import { IconCardsSection } from "@/components/IconCardsSection/IconCardsSection";

export default function WhoWeAre({
  welcomeSection,
  blankSection0,
  tilesSection,
  blankSection1,
  iconCardsSection,
}) {
  if (
    !welcomeSection ||
    !blankSection0 ||
    !tilesSection ||
    !blankSection1 ||
    !iconCardsSection
  ) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/temp-logo.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Novelex Consulting is a purpose-driven company dedicated to bridging communication gaps in an interconnected world. Our core values of integrity, innovation, and collaboration guide our mission to provide comprehensive language, digital, and tech solutions. With a diverse team of linguistic experts and tech enthusiasts, we're committed to empowering clients to thrive in a globalized landscape. Sustainability is at the heart of our corporate responsibility, and strong partnerships with industry leaders underscore our dedication to client success. At Novelex, we transcend boundaries to create a future of limitless communication and growth.  Join us on this transformative journey. Explore the world of Novelex, where purpose-driven values meet cutting-edge strategy, and where language and technology converge to open doors to new possibilities. Together, we transcend boundaries and create a future of limitless communication and growth."
        />
        <title>Who We Are | Novelex Consulting</title>
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
        <IconCardsSection
          content={iconCardsSection.content}
          SVGs={iconCardsSection.SVGs}
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
  const iconCardsSection = await getCurrentContentfulType(
    "iconCardsSection",
    "whoWeAre"
  );

  return {
    props: {
      welcomeSection,
      blankSection0,
      tilesSection,
      blankSection1,
      iconCardsSection,
    },
  };
}
