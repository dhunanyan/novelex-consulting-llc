import { Content, HtmlData } from "@data";
import { renderSection, SectionPropsType } from "@utils";

const PAGE_ID = "who-we-are";
const SUB_PAGE_ID = "climate-strategy";
const CURRENT_PAGE_ID = "eco-friendly-practices";

export const metadata = HtmlData[PAGE_ID][SUB_PAGE_ID][CURRENT_PAGE_ID];

const sections = (
  Content[PAGE_ID] as unknown as {
    [key: string]: {
      [key: string]: SectionPropsType[];
    };
  }
)[SUB_PAGE_ID][CURRENT_PAGE_ID];

const Page = () => (
  <>{sections.map((section, index) => renderSection({ section, index }))}</>
);

export default Page;
