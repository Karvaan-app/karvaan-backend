const express = require("express");
const cors = require("cors");
const search_route = require("./routes/search_route");

// const dotenv = require('dotenv');

// dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/search", search_route);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
