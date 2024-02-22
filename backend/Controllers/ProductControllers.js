const ProductSchema=require("../Models/ProductModel")

const ProductController={
    getall:async(req,res)=>{
        const categories= await ProductSchema.find()
        res.send(categories)
    },
    getById: async(req,res)=>{
        const {id}=req.params
        const category= await ProductSchema.findById(id)
        res.send(category)
    },
    add:async(req,res)=>{
        const {thumbnail,rating,price,title,description}=req.body
        const newCategory= new ProductSchema({thumbnail,rating,price,title,description})
        await newCategory.save()
        res.send(newCategory)
       
    },
    update:async(req,res)=>{
        const {id}=req.params
        const {name,image}=req.body
        const updatedCategory= await ProductSchema.findByIdAndUpdate(id,{name,image},{new:true})
        res.send(updatedCategory)
    },
    delete: async(req,res)=>{
        const {id}=req.params
        const deletedCategory= await ProductSchema.findByIdAndDelete(id)
        res.send(deletedCategory)
    }
}


module.exports=ProductController