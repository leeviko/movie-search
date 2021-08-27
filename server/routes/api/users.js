const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const { check, validationResult } = require("express-validator");
const db = require("../../config/db");
const router = express.Router();


router.get("/", (req,res) => {
  const sql = "SELECT * FROM user";
  const params = [];
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

/** 
 * @route  POST api/users
 * @desc   Register a new user
 * @access Public
*/
router.post("/register", [
  check("name").trim().escape().isLength({ min: 4 }),
  check("password").trim().escape().isLength({ min: 4 }),
  check("confirm-password").trim().escape().isLength({ min: 4 }),
  
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
  }
  const { name, password } = req.body
  const id = uuidv4();

  const newUser = {
    name,
    password,
    id
  }

  // Hash password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    newUser.password = hash;

    let sql = "INSERT INTO users (id, name, password) VALUES (?, ?, ?)";
    
    let params = [newUser.id, newUser.name, newUser.password];

    db.run(sql, params, (err,result) => {
      if(err) {
        res.status(400).json({ "error": err.message })
      }
      res.json({
        newUser
      })
    })
  });
  
})



module.exports = router;
