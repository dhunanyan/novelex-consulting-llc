import { HtmlData, Content } from "@data";

import { HeroSection, IconCardsSection } from "@components";
export const metadata =
  HtmlData["who-we-are"]["global-impact"]["leveraging-diversity"];

const { heroSection, iconCardsSection } =
  Content["who-we-are"]["global-impact"]["leveraging-diversity"];

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
