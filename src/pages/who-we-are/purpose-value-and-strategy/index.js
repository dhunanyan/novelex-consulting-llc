import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { IconCardsSection } from "@/components/IconCardsSection/IconCardsSection";

export default function PurposeValueAndStrategy({
  welcomeSection,
  iconCardsSection0,
  iconCardsSection1,
  iconCardsSection2,
}) {
  if (
    !welcomeSection ||
    !iconCardsSection0 ||
    !iconCardsSection1 ||
    !iconCardsSection2
  ) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="At Novelex Consulting, we are driven by a clear purpose - to bridge the communication gaps across languages and technology. Our values of integrity, innovation, and collaboration underpin everything we do. Our strategic vision is to provide comprehensive language, digital, and tech solutions that empower our clients to succeed in a globalised world."
        />
        <title>Purpose, Value and Strategy | Novelex Consulting</title>
      </Head>
      <main>
        <HeroSection
          content={welcomeSection.content}
          SVGs={welcomeSection.SVGs}
          images={welcomeSection.images}
        />
        <IconCardsSection
          content={iconCardsSection2.content}
          SVGs={iconCardsSection2.SVGs}
          inverseColors={true}
        />
        <IconCardsSection
          content={iconCardsSection1.content}
          SVGs={iconCardsSection1.SVGs}
          order={2}
        />
        <IconCardsSection
          content={iconCardsSection0.content}
          SVGs={iconCardsSection0.SVGs}
          inverseColors={true}
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const welcomeSection = await getCurrentContentfulType(
    "welcomeSection",
    "purposeValueAndStrategy"
  );
  const iconCardsSection0 = await getCurrentContentfulType(
    "iconCardsSection",
    "purposeValueAndStrategy",
    0
  );
  const iconCardsSection1 = await getCurrentContentfulType(
    "iconCardsSection",
    "purposeValueAndStrategy",
    1
  );
  const iconCardsSection2 = await getCurrentContentfulType(
    "iconCardsSection",
    "purposeValueAndStrategy",
    2
  );

  return {
    props: {
      welcomeSection,
      iconCardsSection0,
      iconCardsSection1,
      iconCardsSection2,
    },
  };
}
