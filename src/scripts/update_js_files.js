const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join(__dirname, "../data/PAGES_HTML.json");
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
const jsDirectory = path.join(__dirname, "../pages");

function getAllJsFiles(dirPath) {
  let results = [];

  fs.readdirSync(dirPath, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(getAllJsFiles(fullPath));
    } else if (entry.isFile() && path.extname(entry.name) === ".js") {
      results.push(fullPath);
    }
  });

  return results;
}

// Function to recursively traverse JSON structure and update JS files
function updateJsFilesFromJson(json, currentPath = "") {
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      const value = json[key];
      const newPath = currentPath ? `${currentPath}/${key}` : key;
      const jsFileName = value.title
        ? value.title.split(" | ")[0].replace(/\s+/g, "")
        : "";
      const jsFiles = getAllJsFiles(jsDirectory);

      jsFiles.forEach((jsFile) => {
        const fileName = path.basename(jsFile, ".js");
        if (fileName === jsFileName) {
          let content = fs.readFileSync(jsFile, "utf8");

          const jsonPathString = newPath.split("/").join("']['");
          const titleReplacement = `<title>{PAGES_HTML['${jsonPathString}'].title}</title>`;
          const descriptionReplacement = `<meta name="description" content={PAGES_HTML['${jsonPathString}'].description} />`;
          const keywordsReplacement = `<meta name="keywords" content={PAGES_HTML['${jsonPathString}'].keywords} />`;

          content = content.replace(
            /<meta name="keywords" content="[^"]*" \/>/,
            keywordsReplacement
          );
          content = content.replace(
            /<meta name="description" content="[^"]*" \/>/,
            descriptionReplacement
          );
          content = content.replace(/<title>[^<]*<\/title>/, titleReplacement);

          const importStatement = `import PAGES_HTML from "@/data/PAGES_HTML";\n`;
          if (!content.startsWith(importStatement)) {
            content = importStatement + content;
          }

          fs.writeFileSync(jsFile, content, "utf8");
          console.log(`Updated ${jsFile}`);
        }
      });

      if (typeof value === "object" && !Array.isArray(value)) {
        updateJsFilesFromJson(value, newPath);
      }
    }
  }
}

// Start processing from the JSON data
updateJsFilesFromJson(jsonData);
