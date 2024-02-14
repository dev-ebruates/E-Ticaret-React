const express = require("express");
const router = express.Router();

//diğer route dosyalarını içe aktarıyoruz
const  productRoute = require("./products.js");
const  categoryRoute = require("./categories.js");
const userRoute = require("./auth.js")

//her route u ilgili yol altında kullanıyoruz

router.use("/products", productRoute)
router.use("/users", userRoute)
router.use("/categories", categoryRoute)
module.exports = router;
