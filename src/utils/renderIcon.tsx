import * as React from "react";
import { SocialIconsType } from "@config";

import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const ICONS = {
  twitter: <AiOutlineTwitter />,
  linkedin: <AiFillLinkedin />,
  instagram: <AiFillInstagram />,
  facebook: <AiFillFacebook />,
};

export const renderIcon = (id: SocialIconsType): React.JSX.Element => ICONS[id];
