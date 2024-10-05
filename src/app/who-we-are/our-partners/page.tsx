import { HtmlData, Content } from "@data";
import { HeroSection, IconCardsSection } from "@components";

export const metadata = HtmlData["who-we-are"]["our-partners"]["index"];

const {
  index: { heroSection },
  "innovative-solutions": {
    iconCardsSection: iconCardsSectionInnovativeSolutions,
  },
  "mutual-growth-endeavors": {
    iconCardsSection: iconCardsSectionMutualGrowthEndeavors,
  },
  "shared-vision-and-values": {
    iconCardsSection: iconCardsSectionSharedVisionAndValues,
  },
  "strategic-collaborations": {
    iconCardsSection: iconCardsSectionStrategicCollaborations,
  },
} = Content["who-we-are"]["our-partners"];

const Page = () => (
  <>
    <HeroSection {...heroSection} />
    <IconCardsSection
      {...iconCardsSectionInnovativeSolutions}
      inverseColors={true}
    />
    <IconCardsSection {...iconCardsSectionMutualGrowthEndeavors} order={2} />
    <IconCardsSection
      {...iconCardsSectionSharedVisionAndValues}
      inverseColors={true}
    />
    <IconCardsSection {...iconCardsSectionStrategicCollaborations} order={2} />
  </>
);

export default Page;
