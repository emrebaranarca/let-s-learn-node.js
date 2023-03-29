


const http=require("http")

/* http serverin görevi kendisine gelen requesti dinler ve 
bir response gönderir
*/

const server=http.createServer((req,res)=>{
    // if(req.url === "/"){
    //     res.write("hello world")
    //     res.end()
    // }if(req.url === "/api/products"){
    //     res.write("product lists")
    //     res.end()
    // }


    const fs=require("fs")

    fs.readFile("\index.html",(error,file)=>{
        if(error){
            //res.setHeader("contect-type","text/plain")
            res.write(error.code)
            res.end()
        }else{
            //res.setHeader("contect-type","text/html")
            res.write(file)
            res.end()
        }
    })
})

server.listen(3000)



console.log("Listening port on 3000..")


//bir dosyayı response(body) gönderme


