
// module oluşturma ve onu dışarıya açma
// A module

var name = "emre";  // public
var ID = 5;        // private

var writeName = function(text) {
    console.log(text);
};

module.exports = {
    name: name,
    writeName: writeName
};








