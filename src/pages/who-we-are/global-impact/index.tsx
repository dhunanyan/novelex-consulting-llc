import Head from "next/head";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

import { HtmlData, Content } from "@data";

const {
  index: { heroSection },
  "environmental-responsibility": {
    iconCardsSection: iconCardsSectionEnvironmentalResponsibility,
  },
  "global-collaborations": {
    iconCardsSection: iconCardsSectionGlobalCollaborations,
  },
  "leveraging-diversity": {
    iconCardsSection: iconCardsSectionLeveragingDiversity,
  },
  "social-responsibility": {
    iconCardsSection: iconCardsSectionSocialResponsibility,
  },
} = Content["who-we-are"]["global-impact"];

export default function GlobalImpact() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={HtmlData["who-we-are"]["global-impact"]["index"].keywords}
        />
        <meta
          name="description"
          content={HtmlData["who-we-are"]["global-impact"]["index"].description}
        />
        <title>{HtmlData["who-we-are"]["global-impact"]["index"].title}</title>
      </Head>
      <main>
        <HeroSection {...heroSection} />
        <IconCardsSection
          {...iconCardsSectionEnvironmentalResponsibility}
          inverseColors={true}
        />
        <IconCardsSection {...iconCardsSectionGlobalCollaborations} order={2} />
        <IconCardsSection
          {...iconCardsSectionLeveragingDiversity}
          inverseColors={true}
        />
        <IconCardsSection {...iconCardsSectionSocialResponsibility} order={2} />
      </main>
    </>
  );
}
