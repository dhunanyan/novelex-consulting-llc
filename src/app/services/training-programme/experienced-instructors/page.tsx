import { Content, HtmlData } from "@data";
import { renderSection, SectionPropsType } from "@utils";

const PAGE_ID = "services";
const SUB_PAGE_ID = "training-programme";
const CURRENT_PAGE_ID = "experienced-instructors";

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
