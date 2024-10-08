/* eslint-disable */
const fs = require("fs");

const icons = [
  "book",
  "bullseye-solid",
  "check-circle",
  "cogs",
  "coins",
  "comment",
  "dots",
  "exchange-alt",
  "globe",
  "globe-americas",
  "hand",
  "handshake",
  "horse",
  "info",
  "key-solid",
  "languages",
  "laptop",
  "leaf",
  "light-bulb",
  "megaphone",
  "monitor",
  "paper",
  "people",
  "rocket",
  "sliders-h",
  "target",
  "trending-down",
  "users",
];

const getRandomIcon = () => icons[Math.floor(Math.random() * icons.length)];

const replaceKeywordWithRandom = (filePath, keyword) => {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const updatedContent = fileContent.replace(/logo/g, getRandomIcon);
  fs.writeFileSync(filePath, updatedContent, "utf8");

  console.log(
    `Replaced occurrences of '${keyword}' with random values in ${filePath}`
  );
};

const filePath = "./src/data/Content.ts";
const keyword = "logo";

replaceKeywordWithRandom(filePath, keyword);
