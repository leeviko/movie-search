const dotenv = require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/result/:searchVal", (req, res) => {
  const value = req.params.searchVal;
  axios.get(`https://imdb-api.com/en/API/Search/${process.env.API_KEY}/${value}`)
  .then((resp) => {
    // handle success
    res.json(resp.data.results)
  })
  .catch((err) => {
    // handle error
    console.log(err);
  })
});

app.listen(port, () => console.log(`Server started on port ${port}`)) 