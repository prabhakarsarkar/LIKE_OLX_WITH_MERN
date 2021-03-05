const express = require("express");
const { userSignup, findData, user_login } = require("../controller/auth");
const { user_verify_with_jwt } = require("../verify_user_with_jwt/verify");

const router = express.Router();


router.post("/user/signup",userSignup)
router.post("/user/login",user_login)
router.get("/",user_verify_with_jwt,findData)

module.exports=router