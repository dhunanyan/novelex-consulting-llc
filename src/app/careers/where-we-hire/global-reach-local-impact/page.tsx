import { Content } from "@data";
import { renderSection, SectionPropsType } from "@utils";

const PAGE_ID = "careers";
const SUB_PAGE_ID = "where-we-hire";
const CURRENT_PAGE_ID = "global-reach-local-impact";

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
