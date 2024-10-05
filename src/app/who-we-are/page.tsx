import { HtmlData, Content } from "@data";
import { HeroSection } from "@components/HeroSection/HeroSection";
import { BlankSection } from "@components/BlankSection/BlankSection";
import { TilesSection } from "@components/TilesSection/TilesSection";
import { IconCardsSection } from "@components/IconCardsSection/IconCardsSection";

export const metadata = HtmlData["who-we-are"]["index"];

const {
  heroSection,
  blankSectionPurpose,
  tilesSection,
  blankSectionDiversity,
  iconCardsSection,
} = Content["who-we-are"]["index"];

const Page = () => (
  <>
    <HeroSection {...heroSection} />
    <BlankSection {...blankSectionPurpose} />
    <TilesSection {...tilesSection} />
    <BlankSection {...blankSectionDiversity} />
    <IconCardsSection {...iconCardsSection} />
  </>
);

export default Page;
