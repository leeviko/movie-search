const express = require("express");
const router = express.Router();
const axios = require("axios")

router.get("/result/:searchVal", (req, res) => {
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

module.exports = router;