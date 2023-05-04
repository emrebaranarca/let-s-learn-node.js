const express=require("express")
const app=new express()

const port=3000

/*
app.get("/",(req,res)=>{
    res.send("hello world")
})


app.get("/api/products",(req,res)=>{
    res.send("product lists")
})
*/


/*
app.use("/",(req,res,next)=>{
    console.log("middlewares working");
    next()
})
app.use("/api/products",(req,res,next)=>{
    console.log("middleware_2")
    res.send("products")
})
app.use("/api/user",(req,res,next)=>{
    console.log("middleware_3")
    res.send("users")
})
app.use("/",(req,res,next)=>{
    console.log("middleware_4")
    res.send("homepage")
})

*/



//miniForm
const bodyParser = require('body-parser')



/*
app.use("/product-add",(req,res,next)=>{

    res.send(
        `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                
                    <form action="/name" method="POST">
                
                    
                        <input type="text" name="name" placeholder="name">
                        <button type="submit" >
                            POST
                        </button>
                
                
                
                    </form>
                    
                </body>
            </html>
        `
    )
})


app.post("/name",(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})
app.use("/",(req,res,next)=>{
    res.send("homepage")
})

*/
const path=require("path")
const adminRouter=require("./routers/admin")
const userRouter=require("./routers/user")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,"public")))   //parse --> object


app.use(adminRouter)
app.use(userRouter)

//404 not found page

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"views","404.html"))
})


app.listen(3000,()=>{
    console.log(`Example app listening on port ${port}`)
})


