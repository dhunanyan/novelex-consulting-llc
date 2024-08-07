import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { IconCardsSection } from "@/components/IconCardsSection/IconCardsSection";

import { PAGES_HTML } from "@/data";

export default function OurPurpose({ welcomeSection, iconCardsSection }) {
  if (!welcomeSection || !iconCardsSection) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            PAGES_HTML["who-we-are"]["purpose-value-and-strategy"][
              "our-purpose"
            ].keywords
          }
        />
        <meta
          name="description"
          content={
            PAGES_HTML["who-we-are"]["purpose-value-and-strategy"][
              "our-purpose"
            ].description
          }
        />
        <title>
          {
            PAGES_HTML["who-we-are"]["purpose-value-and-strategy"][
              "our-purpose"
            ].title
          }
        </title>
      </Head>
      <main>
        <HeroSection
          content={welcomeSection.content}
          SVGs={welcomeSection.SVGs}
          images={welcomeSection.images}
        />
        <IconCardsSection
          content={iconCardsSection.content}
          SVGs={iconCardsSection.SVGs}
          inverseColors={true}
          forceHideButton={true}
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
  const iconCardsSection = await getCurrentContentfulType(
    "iconCardsSection",
    "purposeValueAndStrategy",
    2
  );

  return {
    props: {
      welcomeSection,
      iconCardsSection,
    },
  };
}
