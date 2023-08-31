const contentful = require("contentful");

export default async (req, res) => {
  const { contentType, tag } = req.query;

  try {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: "master",
    });

    const response = await client.getEntries({ content_type: contentType });

    if (tag === "undefined") {
      res.status(200).json(response.items[0].fields);
    } else {
      const entries = response.items.find((x) =>
        x.metadata.tags.find((y) => y.sys.id === tag)
      ).fields;
      res.status(200).json(entries);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Contentful" });
  }
};
