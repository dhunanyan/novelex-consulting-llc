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
          content="Our Values: Integrity, Innovation, Collaboration—these aren't just words on a wall; they are the very essence of Novelex. We hold ourselves to the highest ethical standards, constantly seek fresh ideas and innovative solutions, and foster an environment where collaboration is not just encouraged but cherished."
        />
        <title>Our Values | Novelex Consulting</title>
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
    1
  );

  return {
    props: {
      welcomeSection,
      iconCardsSection,
    },
  };
}
