const express = require("express");
const app = express();


app.get("/",(req,res)=>{
  res.send("Hello Express.js");
})
app.get("/api",(req,res)=>{
  res.send("Bu apı route")
})
app.get("/deneme",(req,res)=>{
  res.send("Bu denemedir")
})

app.listen(5555,()=>{
  console.log(`sunucu ${5555} portunda çalışıyor`);
})