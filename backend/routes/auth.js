const express = require("express");
const bcryptjs = require("bcryptjs");
const router = express.Router();
const User = require("../models/User.js");

const generateRandomAvatar = () => {
  const ramdomAvatar = Math.floor(Math.random() * 71);
  return `https://i.pravatar.cc/300/img${ramdomAvatar}`;
};

//kullanıcı oluşturma(create- user)
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const defaultAvatar = generateRandomAvatar();
    //email adresi bir kere kullanılabilir
    //return yaptığımız için aşağıya girmeden devam edecek
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ error: "Email adress is already registed." });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
    });
    console.log(newUser);
    //veritabanına kayıt ettik
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
