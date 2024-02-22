const ProductControllers=require("../Controllers/ProductControllers")
const express=require("express")
const router=express.Router()


router.get("/",ProductControllers.getall)
router.get("/:id",ProductControllers.getById)
router.post("/",ProductControllers.add)
router.delete("/:id",ProductControllers.delete)

module.exports=router