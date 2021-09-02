const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const { check, validationResult } = require("express-validator");
const db = require("../../config/db");
const router = express.Router();


// router.get("/", (req,res) => {
//   const sql = "SELECT * FROM users";
//   const params = [];
//   db.all(sql,params, (err,rows) => {
//     if(err) {
//       res.status(400).json({"error": err.message});
//       return;
//     }
//     res.json({
//       "message": "success",
//       "data": rows
//     })
//   })
//   db.close();
// })

/** 
 * @route  POST api/users
 * @desc   Register a new user
 * @access Public
*/
router.post("/register", [
  check("name").trim().escape().isLength({ min: 4 }),
  check("password").trim().escape().isLength({ min: 4 }),
  
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
        return res.status(400).json({ "error": err.message })
      }

      // Store user to sqlite session storage
      const sessUser = { id: newUser.id, name: newUser.name };
      req.session.user = sessUser;

      res.json({
        sessUser
      })
    })
  });
  
})

/** 
 * @route  GET api/users
 * @desc   Get user info
 * @access Public
*/
router.get("/:id", [
  check("id").trim().escape()
], (req,res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
  }

  const id = req.params.id;

  const sql = "SELECT id, name, createdAt FROM users WHERE id = ?";

  db.get(sql, [id], (err, result) => {
    if(err) {
      return res.status(400).json({ "error": err.message })
    }

    res.json({
      user: result
    })

  })

})

module.exports = router;
