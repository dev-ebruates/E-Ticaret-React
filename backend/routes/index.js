const express = require("express");
const router = express.Router();

//diğer route dosyalarını içe aktarıyoruz
const  productRoute = require("./products.js");
const  categoryRoute = require("./categories.js");
const usersRoute = require("./auth.js")
const couponRoute = require("./coupons.js")
const userRoute = require("./users.js")

//her route u ilgili yol altında kullanıyoruz

router.use("/products", productRoute)
router.use("/users", usersRoute)
router.use("/categories", categoryRoute)
router.use("/coupons", couponRoute)
router.use("/user", userRoute)


module.exports = router;
