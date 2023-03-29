
// module oluşturma ve onu dışarıya açma

var name="emre"  
var ID=5  //private

var writeName=function(name){
    console.log(name)
}


module.exports={
    name,
    writeName
}


