import { HtmlData, Content } from "@data";
import { Sections } from "@config";
import { renderSection, SectionPropsType } from "@utils";
import { HeroSectionPropsType } from "@components";

const PAGE_ID = "who-we-are";
const SUB_PAGE_ID = "diversity-and-inclusion";

export const metadata = HtmlData[PAGE_ID][SUB_PAGE_ID]["index"];

const sections = Content[PAGE_ID][SUB_PAGE_ID] as unknown as {
  [key: string]: SectionPropsType[];
};

const sectionsToRender = [
  // HeroSection
  Content[PAGE_ID][SUB_PAGE_ID].index[0] as HeroSectionPropsType,
  // Icon Cards Sub pages
  ...Object.keys(sections).map((key) =>
    sections[key].find((s) => s.type === Sections.ICON_CARDS)
  ),
];

const Page = () => (
  <>{sectionsToRender.map((section) => renderSection(section))}</>
);

export default Page;
