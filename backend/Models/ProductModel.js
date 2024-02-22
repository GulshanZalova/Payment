const mongoose=require("mongoose")
const Schema=mongoose.Schema


const schema=new Schema({
    thumbnail:String,
    title:String,
    description:String,
    price:Number,
    rating:Number
})



const ProductSchema=mongoose.model("Product",schema)


module.exports=ProductSchema