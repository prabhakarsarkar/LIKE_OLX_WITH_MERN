const express = require("express");
const { create_products, get_product_by_shop,get_all_product } = require("../controller/products");
const { user_verify_with_jwt } = require("../verify_user_with_jwt/verify");
const router = express.Router();


router.post("/create/product",user_verify_with_jwt,create_products)
router.get("/get/product/by/shop",user_verify_with_jwt,get_product_by_shop)
router.get("/get/all/product",user_verify_with_jwt,get_all_product)

module.exports=router