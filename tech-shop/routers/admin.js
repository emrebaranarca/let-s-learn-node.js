const express=require("express")
const path=require("path")

//admin
const products=[
    {
        name:"Samsung S23",
        image:"1.jpg"
    },
    {
        name:"Samsung S22",
        image:"2.jpg"
    },
    {
        name:"iphone 13",
        image:"3.jpg"
    },
    {
        name:"iphone 14",
        image:"4.jpg"
    }
]

const router=express.Router()

router.get("/admin/add-product",(req,res,next)=>{
   res.render("add-product",{title : "Add Product"})
})


router.post("/admin/add-product",(req,res,next)=>{
    products.push({ name:req.body.name , image:req.body.image })
    res.redirect("/")
})

module.exports.routes=router
module.exports.products=products