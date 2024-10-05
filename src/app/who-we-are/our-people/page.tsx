import { HtmlData, Content } from "@data";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

export const metadata = HtmlData["who-we-are"]["our-people"]["index"];

const {
  index: { heroSection },
  "collective-excellence": {
    iconCardsSection: iconCardsSectionCollectiveExcellence,
  },
  "culture-of-inclusivity": {
    iconCardsSection: iconCardsSectionCultureOfInclusivity,
  },
  "professional-growth": {
    iconCardsSection: iconCardsSectionProfessionalGrowth,
  },
  "well-being": { iconCardsSection: iconCardsSectionWellBeing },
} = Content["who-we-are"]["our-people"];

const Page = () => (
  <>
    <HeroSection {...heroSection} />
    <IconCardsSection
      {...iconCardsSectionCollectiveExcellence}
      inverseColors={true}
    />
    <IconCardsSection {...iconCardsSectionCultureOfInclusivity} order={2} />
    <IconCardsSection
      {...iconCardsSectionProfessionalGrowth}
      inverseColors={true}
    />
    <IconCardsSection {...iconCardsSectionWellBeing} order={2} />
  </>
);

export default Page;
