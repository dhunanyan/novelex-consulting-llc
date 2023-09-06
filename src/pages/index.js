import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";

import { HeroSection } from "@/components/HeroSection/HeroSection";
import { IconCardsSection } from "@/components/IconCardsSection/IconCardsSection";
import { ImageCardsSection } from "@/components/ImageCardsSection/ImageCardsSection";

import { PRIMARY_BLACK_COLOR } from "@/utils/styles";
import { HiMiniGlobeAlt } from "react-icons/hi2";
export default function HomePage({
  welcomeSection1,
  welcomeSection0,
  whoWeAre,
  services,
  imageCardsSection,
}) {
  if (
    !welcomeSection1 ||
    !welcomeSection0 ||
    !services ||
    !imageCardsSection ||
    !whoWeAre
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
        <meta name="description" content="" />
        <title>Novelex Consulting LLC</title>
      </Head>
      <main>
        <HiMiniGlobeAlt />
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
        <IconCardsSection content={whoWeAre.content} SVGs={whoWeAre.SVGs} />
        <ImageCardsSection
          content={imageCardsSection.content}
          SVGs={imageCardsSection.SVGs}
          images={imageCardsSection.images}
        />
        <IconCardsSection
          content={services.content}
          SVGs={services.SVGs}
          images={services.images}
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
  const whoWeAre = await getCurrentContentfulType(
    "iconCardsSection",
    "whoWeAre"
  );
  const imageCardsSection = await getCurrentContentfulType("imageCardsSection");
  const services = await getCurrentContentfulType(
    "iconCardsSection",
    "services"
  );

  return {
    props: {
      welcomeSection1,
      welcomeSection0,
      whoWeAre,
      services,
      imageCardsSection,
    },
  };
}
