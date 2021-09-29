const express = require("express");
const router = express.Router();
const axios = require("axios")

/** 
 * @route  GET api/items/result
 * @desc   Get a result of search query
 * @access Public
*/

router.get("/result/:searchVal", (req, res) => {
  const value = req.params.searchVal;
  
  axios.get(`https://imdb-api.com/en/API/Search/${process.env.API_KEY}/${value}`)
  .then((response) => {
    res.json(response.data.results)
  })
  .catch((err) => {
    return res.status(404).json({ error: "Jotain meni pieleen:(" })
  })
});

module.exports = router;