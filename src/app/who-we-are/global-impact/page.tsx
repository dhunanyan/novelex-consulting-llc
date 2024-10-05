import { HtmlData, Content } from "@data";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

export const metadata = HtmlData["who-we-are"]["global-impact"]["index"];

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

const Page = () => (
  <>
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
  </>
);

export default Page;
