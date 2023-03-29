const express=require("express")
const app=new express()

const port=3000


const bodyParser = require('body-parser')
const path=require("path")

const adminRouter=require("./routers/admin")
const userRouter=require("./routers/user")

app.use(adminRouter)
app.use(userRouter)


app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"views","404.html"))
})




























app.listen(3000,()=>{
    console.log(`Example app listening on port ${port}`)
})