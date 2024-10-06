import { Content } from "@data";
import { renderSection, SectionPropsType } from "@utils";

const PAGE_ID = "index";

const sections = Content[PAGE_ID] as SectionPropsType[];

const Page = () => (
  <>{sections.map((section, index) => renderSection({ section, index }))}</>
);

export default Page;
