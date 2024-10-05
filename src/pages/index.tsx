import Head from "next/head";

import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";
import { ImageCardsSection } from "@components/ImageCardsSection/ImageCardsSection";

import { PRIMARY_BLACK_COLOR } from "@utils/styles";

import { Content } from "@data";
import { SummarySection } from "@components/SummarySection/SummarySection";

const {
  heroSection,
  aboutSection,
  iconCardsSectionCareers,
  imageCardsSection,
  iconCardsSectionServices,
} = Content["index"];

export default function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content={""} />
        <meta name="description" content="" />
        <title>Novelex Consulting</title>
      </Head>
      <main>
        <HeroSection {...heroSection} isInverted={true} />
        <SummarySection {...aboutSection} />
        <IconCardsSection {...iconCardsSectionCareers} />
        <ImageCardsSection {...imageCardsSection} />
        <IconCardsSection
          {...iconCardsSectionServices}
          order={1}
          contentBackgroundColor={PRIMARY_BLACK_COLOR}
        />
      </main>
    </>
  );
}
