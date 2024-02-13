const express = require("express");
const router = express.Router();
const Category = require("../models/Category.js");

router.post("/", async(req,res)=>{
try {
  const {name, img} = req.body;
const newCategory = new Category({name,img});
await newCategory.save();

  res.status(201).json(newCategory);
  
} catch (error) {
  console.log(error);
  
}
});


//tüm kategorileri getirme (Read All)
router.get("/", async(req,res)=> {
  res.send("kategoriler getirildi");
})

module.exports = router;