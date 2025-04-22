const Fuse = require("fuse.js");
const interests = require("../data/interests");

const fuse = new Fuse(interests, {
  includeScore: true,
  threshold: 0.4,
});

const handleSearch = (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json("Query is required");
  }

  const results = fuse.search(query).map((result) => result.item);
  res.json({ results });
};

module.exports = { handleSearch };
