import Head from "next/head";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";
import { HtmlData, Content } from "@data";

const { heroSection, iconCardsSection } =
  Content["who-we-are"]["our-people"]["professional-growth"];

export default function ProfessionalGrowth() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icons/i_logo.svg" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content={
            HtmlData["who-we-are"]["our-people"]["professional-growth"].keywords
          }
        />
        <meta
          name="description"
          content={
            HtmlData["who-we-are"]["our-people"]["professional-growth"]
              .description
          }
        />
        <title>
          {HtmlData["who-we-are"]["our-people"]["professional-growth"].title}
        </title>
      </Head>
      <main>
        <HeroSection {...heroSection} />
        <IconCardsSection
          {...iconCardsSection}
          inverseColors={true}
          forceHideButton={true}
        />
      </main>
    </>
  );
}
