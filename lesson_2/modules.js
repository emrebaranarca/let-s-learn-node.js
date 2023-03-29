// path modulu : dosya adları ve konumlarına ilişkin yardımcı olur
 
const path=require("path")
/*
 let file=path.parse(__filename)

 console.log(file)

 console.log(file.root)
 console.log(file.base)
 console.log(file.ext)
 console.log(file.name)

 */


 //url module : kullandığımız adresin query domain gibi özelliklerine ulaşabiliriz.

 /*
 const URL=require("url")
 let api=URL.parse("https://restcountries.com/v3.1/name/{name}?fullText=true")
 console.log(api)
*/


 // file system module : uygulamamızdaki dosyalara her türlü işlemi bu modül ile yapabilirz

 const fs=require("fs")

 const files=fs.readdir("./",function(error,data){
    if(error)
    {
        console.log(error)
    }
    else{
        console.log(data)
    }
 })


const myText=fs.readFile("\merhaba.txt","utf8",function(error,data){
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})
const myHTML=fs.readFile("\index.html","utf8",function(error,data){
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})

fs.writeFile("\merhaba.txt","I passed the exam",function(error){
    if(error){
        console.log(error)
    }
})


fs.unlink("\merhaba.txt",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("was deleted")
    }

})

// const myFile=path.parse(__filename)
// console.log(myFile)


