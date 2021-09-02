const express = require("express");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const { check, validationResult } = require("express-validator");
const db = require("../../config/db");
const router = express.Router();


/** 
 * @route  POST api/auth
 * @desc   Authenticate user
 * @access Public
*/  
router.post("/", [
  check("name").trim().escape(),
  check("password").trim().escape(),
  
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
  }

  const { name, password } = req.body;

  let sql = "SELECT * FROM users WHERE name = ?";

  db.get(sql, [name], (err, user) => {
    if(!user) {
      return res.status(400).json({ msg: "Nimi tai salasana on väärä" })
    } else if (err) {
      return res.status(400).json({ msg: "Nimi tai salasana on väärä" })
    }

    bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(!isMatch) {
          return res.status(400).json({ msg: "Nimi tai salasana on väärä" })
        } else {

          // Store user to sqlite session storage
          const sessUser = { id: user.id, name: user.name };
          req.session.user = sessUser;

          res.json(
            sessUser
          );
        }
        

      })
      
  })

})

/** 
 * @route  DELETE api/auth/logout
 * @desc   Logout user
 * @access Private
*/
router.delete("/logout", (req, res) => {
  const sessUser = req.session.user;
  console.log("SESS: ", sessUser);
  req.session.destroy((err) => {
    if(err) throw err;
    res.clearCookie("session-id")
    res.send({ msg: "Kirjauduttu ulos" })
  });
})

/** 
 * @route  GET api/auth/isauth
 * @desc   Check if already logged in & return cookie
 * @access Public
*/
router.get("/isauth", (req, res) => {
  const sessUser = req.session.user;
  if(!sessUser) {
    return res.status(401).json({ msg: "Unauthorized" });
  } else {
    return res.json(sessUser);
  }
})


module.exports = router;
