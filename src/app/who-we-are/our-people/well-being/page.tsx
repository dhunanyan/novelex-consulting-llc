import { HtmlData, Content } from "@data";
import { HeroSection, IconCardsSection } from "@components";

export const metadata = HtmlData["who-we-are"]["our-people"]["well-being"];

const { heroSection, iconCardsSection } =
  Content["who-we-are"]["our-people"]["well-being"];

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
