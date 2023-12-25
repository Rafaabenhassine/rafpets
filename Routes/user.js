const express =require("express");
const { register, upuser, deleteuser, getall } = require("../Controllers/user");
const { registervalidation, validator } = require("../Middleware/validator");
const auth = require("../Middleware/auth");

//require router
const router=express.Router()

//get user
router.get("/getusers",getall);


router.post("/register",registervalidation(),validator,register);

//update user
router.put("/edit/:_id",upuser);

//delete user
router.delete("/delete/:_id",deleteuser);

//current user
router.get("/current/",auth,(req,res)=>{res.send(req.user)});

//export
module.exports = router;
