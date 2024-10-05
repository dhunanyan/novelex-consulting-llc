import * as React from "react";
import { HeaderComponent } from "./HeaderComponent";
import { Navigator } from "./Navigator";

export const Header = () => (
  <>
    <HeaderComponent />
    <Navigator />
  </>
);

export { HeaderFallback } from "./HeaderFallback";
