import * as React from "react";
import { HtmlData } from "@data";

export const metadata = HtmlData["index"];

export type RootLayoutPropsType = {
  children: React.JSX.Element;
};

export default function WhoWeAreLayout({ children }: RootLayoutPropsType) {
  return <div>{children}</div>;
}
