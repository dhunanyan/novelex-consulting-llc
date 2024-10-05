import { HtmlData, Content } from "@data";
import {
  HeroSection,
  BlankSection,
  TilesSection,
  IconCardsSection,
} from "@components";

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
