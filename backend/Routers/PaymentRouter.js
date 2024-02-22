const PaymentController=require("../Controllers/PaymentControllers")
const express=require("express")
const router=express.Router()


router.post("/",PaymentController.payment)


module.exports=router
