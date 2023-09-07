import React from "react";

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

export const getIcon = (id) => ICONS[id];
