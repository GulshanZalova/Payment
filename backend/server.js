const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const ProductRouter=require("./Routers/ProductRouter")
const PaymentRouter=require("./Routers/PaymentRouter")
mongoose.connect("mongodb+srv://gulshen:program2022@cluster0.fg9rwde.mongodb.net/Payment").then(res=>{
   console.log("Connected")
}).catch(err=>{
    console.log(err)
})

app.use(cors())
app.use(express.json())

app.use("/product",ProductRouter)
app.use("/payment",PaymentRouter)
app.listen(5000,()=>{
    console.log(`5000. portda çalışır!`)
})