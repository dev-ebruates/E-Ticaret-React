const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

//kullanıcı oluşturma(create- user)
router.post("/register", async (req, res) => {
  try {
    const {username, email, password} =req.body;
    const newUser = await new User({
      username, email, password
    })
    console.log(newUser)
    //veritabanına kayıt ettik 
    await newUser.save();
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
