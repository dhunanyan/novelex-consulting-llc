import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { IconCardsSection } from "@/components/IconCardsSection/IconCardsSection";

export default function OurStrategy({ welcomeSection, iconCardsSection }) {
  if (!welcomeSection || !iconCardsSection) {
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
          content="Our Strategy: Our strategic vision is a roadmap that guides us towards our goals. We envision a future where our clients can confidently navigate the complexities of a globalised world. We achieve this by offering comprehensive language, digital, and tech solutions, always striving to exceed expectations and set industry standards."
        />
        <title>Our Strategy | Novelex Consulting</title>
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
    0
  );

  return {
    props: {
      welcomeSection,
      iconCardsSection,
    },
  };
}
