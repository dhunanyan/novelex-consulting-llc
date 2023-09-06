export async function getCurrentContentfulType(contentType, tag, nth) {
  try {
    const PORT = process.env.PORT || "3000";
    const IS_DEV = process.env.NODE_ENV === "development";
    const JURISDICTION = process.env.JURISDICTION || "com";
    const BASE_URL = IS_DEV
      ? `http://localhost:${PORT}`
      : `https://novelex-consulting.${JURISDICTION}`;

    const response = await fetch(
      `${BASE_URL}/api/contentful?contentType=${contentType}&tag=${tag}&nth=${nth}`
    );
    const allContent = await response.json();

    const contentKeys = Object.keys(allContent).filter(
      (key) => typeof allContent[key] === "string"
    );
    const assetKeys = Object.keys(allContent).filter(
      (key) => !(typeof allContent[key] === "string")
    );

    const imageKeys = assetKeys.filter(
      (key) => !allContent[key].fields.title.includes("Icon")
    );

    const svgKeys = assetKeys.filter((key) =>
      allContent[key].fields.title.includes("Icon")
    );

    const TEXTs = {};
    const IMAGEs = {};
    const SVGs = {};

    contentKeys.forEach((key, i) => {
      TEXTs[contentKeys[i]] = allContent[key];
    });

    const imageURLs = imageKeys.map((key) => allContent[key].fields.file.url);

    const svgURLs = svgKeys.map((key) => allContent[key].fields.file.url);

    imageURLs.forEach((url, i) => {
      IMAGEs[imageKeys[i]] = url;
    });

    const svgPromises = svgURLs.map(async (url) => {
      const res = await fetch(`https:${url}`);
      const html = await res.text();
      return html;
    });

    const fetchedSVGs = await Promise.all(svgPromises);

    fetchedSVGs.forEach((html, i) => {
      SVGs[svgKeys[i]] = html;
    });

    return {
      content: TEXTs,
      SVGs: SVGs,
      images: IMAGEs,
    };
  } catch (error) {
    return null;
  }
}
