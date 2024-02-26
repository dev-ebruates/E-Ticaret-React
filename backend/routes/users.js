const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

//tüm kullanıcıları  getirme (Read All)
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
    console.log(users);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});


module.exports = router;
