 //hazırladğımız bir modulü projede farklı yerlerde kullanma 

const scriptA=require("./scriptA")

var user="baran"
scriptA.writeName(user)
console.log(scriptA)