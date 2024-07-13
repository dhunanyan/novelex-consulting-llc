import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";

import { HeroSection } from "@/components/HeroSection/HeroSection";
import { IconCardsSection } from "@/components/IconCardsSection/IconCardsSection";
import { ImageCardsSection } from "@/components/ImageCardsSection/ImageCardsSection";

import { PRIMARY_BLACK_COLOR } from "@/utils/styles";
export default function HomePage({
  welcomeSection1,
  welcomeSection0,
  imageCardsSection,
  iconCardsSection0,
  iconCardsSection1,
}) {
  if (
    !welcomeSection1 ||
    !welcomeSection0 ||
    !iconCardsSection0 ||
    !iconCardsSection1 ||
    !imageCardsSection
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
        <meta name="description" content="" />
        <title>Novelex Consulting</title>
      </Head>
      <main>
        <HeroSection
          content={welcomeSection1.content}
          SVGs={welcomeSection1.SVGs}
          images={welcomeSection1.images}
          isInverted={true}
        />
        <HeroSection
          content={welcomeSection0.content}
          SVGs={welcomeSection0.SVGs}
          images={welcomeSection0.images}
          forceImageInsteadIcon={true}
        />
        <IconCardsSection
          content={iconCardsSection0.content}
          SVGs={iconCardsSection0.SVGs}
        />
        <ImageCardsSection
          content={imageCardsSection.content}
          SVGs={imageCardsSection.SVGs}
          images={imageCardsSection.images}
        />
        <IconCardsSection
          content={iconCardsSection1.content}
          SVGs={iconCardsSection1.SVGs}
          images={iconCardsSection1.images}
          order={1}
          contentBackgroundColor={PRIMARY_BLACK_COLOR}
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const welcomeSection1 = await getCurrentContentfulType(
    "welcomeSection",
    "home",
    1
  );
  const welcomeSection0 = await getCurrentContentfulType(
    "welcomeSection",
    "home",
    0
  );
  const iconCardsSection0 = await getCurrentContentfulType(
    "iconCardsSection",
    "home",
    0
  );
  const imageCardsSection = await getCurrentContentfulType("imageCardsSection");
  const iconCardsSection1 = await getCurrentContentfulType(
    "iconCardsSection",
    "home",
    1
  );

  return {
    props: {
      welcomeSection1,
      welcomeSection0,
      imageCardsSection,
      iconCardsSection0,
      iconCardsSection1,
    },
  };
}
