import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { IconCardsSection } from "@/components/IconCardsSection/IconCardsSection";

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
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Our Purpose: At the heart of Novelex lies a clear and compelling purpose—to bridge communication gaps. In an era where global collaboration is paramount, our mission is to facilitate effective communication across linguistic and technological divides. We believe that when communication flows seamlessly, opportunities flourish, and businesses thrive."
        />
        <title>Our Purpose | Novelex Consulting</title>
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
