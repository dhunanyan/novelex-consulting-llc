const contentful = require("contentful");

export default async (req, res) => {
  const { contentType, tag, nth } = req.query;
  try {
    const client = contentful.createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      environment: "master",
    });

    const response = await client.getEntries({ content_type: contentType });

    if (tag === "undefined") {
      res.status(200).json(response.items[0].fields);
      return;
    } else {
      const entries = response.items.filter((x) =>
        x.metadata.tags.find((y) => y.sys.id === tag)
      );

      if (!(nth === "undefined")) {
        const fields = entries.reverse()[nth].fields;
        res.status(200).json(fields);
        return;
      }

      const fields = entries[0].fields;
      res.status(200).json(fields);
    }
  } catch (error) {
    res.status(500).json({ error: "Error fetching data from Contentful" });
  }
};
