const express = require("express");
const router = express.Router();

const { handleSearch } = require("../controllers/searchController");

// Define the search route
router.post("/", handleSearch);

module.exports = router;
