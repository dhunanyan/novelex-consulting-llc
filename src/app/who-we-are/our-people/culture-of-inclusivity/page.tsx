import { HtmlData, Content } from "@data";
import { HeroSection, IconCardsSection } from "@components";

export const metadata =
  HtmlData["who-we-are"]["our-people"]["culture-of-inclusivity"];

const { heroSection, iconCardsSection } =
  Content["who-we-are"]["our-people"]["culture-of-inclusivity"];

const Page = () => (
  <>
    <HeroSection {...heroSection} />
    <IconCardsSection
      {...iconCardsSection}
      inverseColors={true}
      forceHideButton={true}
    />
  </>
);

export default Page;
