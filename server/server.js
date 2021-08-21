const dotenv = require("dotenv").config();
const express = require("express");
const db = require("./config/db");

const items = require("./routes/api/items")

const app = express();

app.use(express.json());

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`)) 