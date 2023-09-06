import Head from "next/head";
import { getCurrentContentfulType } from "@/api/getCurrentContentfulType";

import { HeroSection } from "@/components/HeroSection/HeroSection";
import { IconCardsSection } from "@/components/IconCardsSection/IconCardsSection";
import { ImageCardsSection } from "@/components/ImageCardsSection/ImageCardsSection";

import { PRIMARY_BLACK_COLOR } from "@/utils/styles";

export default function HomePage({
  welcomeSection,
  whoWeAre,
  services,
  imageCardsSection,
}) {
  if (!welcomeSection || !services || !imageCardsSection || !whoWeAre) {
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
  const welcomeSection = await getCurrentContentfulType(
    "welcomeSection",
    "home"
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

  return { props: { welcomeSection, whoWeAre, services, imageCardsSection } };
}
