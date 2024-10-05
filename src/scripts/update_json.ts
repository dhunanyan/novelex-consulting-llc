const fs = require("fs");
const path = require("path");

const PAGES_HTML_FILE = path.resolve(__dirname, "../data/HtmlData.json");

let pagesHtml;
try {
  pagesHtml = JSON.parse(fs.readFileSync(PAGES_HTML_FILE, "utf8"));
} catch (err) {
  console.error(`Error reading HtmlData.json: ${err.message}`);
  process.exit(1);
}

function updateJson(filePath, jsonPath) {
  const absoluteFilePath = path.resolve(filePath); // Resolve the path to an absolute path
  console.log(`Reading file: ${absoluteFilePath}`);

  let fileContent;
  try {
    fileContent = fs.readFileSync(absoluteFilePath, "utf8");
  } catch (err) {
    console.error(`Error reading file ${absoluteFilePath}: ${err.message}`);
    return;
  }

  const titleMatch = fileContent.match(
    /<title>\s*(.*?)\s*\| Novelex Consulting\s*<\/title>/
  );
  const descriptionMatch = fileContent.match(
    /<meta\s+name="description"\s+content="([^"]*)"\s*\/>/
  );
  const keywordsMatch = fileContent.match(
    /<meta\s+name="keywords"\s+content="([^"]*)"\s*\/>/
  );

  let title = titleMatch ? titleMatch[1] : "";
  let description = descriptionMatch ? descriptionMatch[1] : "";
  let keywords = keywordsMatch ? keywordsMatch[1] : "";

  if (title) {
    title =
      title.charAt(0).toUpperCase() +
      title.slice(1).toLowerCase() +
      " | Novelex Consulting";
  }

  let current = pagesHtml;
  for (const key of jsonPath) {
    if (!current[key]) {
      console.error(
        `Key '${key}' not found in JSON path: ${jsonPath.join(" -> ")}`
      );
      return;
    }
    current = current[key];
  }

  current.title = title;
  current.description = description;
  // current.keywords = keywords;

  try {
    fs.writeFileSync(PAGES_HTML_FILE, JSON.stringify(pagesHtml, null, 2));
    console.log(`Updated ${PAGES_HTML_FILE} successfully.`);
  } catch (err) {
    console.error(`Error writing to ${PAGES_HTML_FILE}: ${err.message}`);
  }
}

const filePath = process.argv[2];
const jsonPath = process.argv.slice(3);

updateJson(filePath, jsonPath);
