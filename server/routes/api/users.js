const express = require("express");
const db = require("../../config/db");
const router = express.Router();

router.get("/", (req,res) => {
  let sql = "SELECT * FROM user";
  let params = []
  db.all(sql,params, (err,rows) => {
    if(err) {
      res.status(400).json({"error": err.message});
      return;
    }
    res.json({
      "message": "success",
      "data": rows
    })
  })
})

module.exports = router;