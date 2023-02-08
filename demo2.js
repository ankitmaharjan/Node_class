//Nodejs automatically wrapping the modules into function
//function(exports, require, module, __filename, __dirname){
//Creating an object
ankit = {
    name: "Ankit",
    favNum: 10,
    developer: true
}
//__filename le filename ho print garxa ra __dirname le kun directory location ma ho show garxa
console.log(exports, require, module, __filename, __dirname)
//exporting he object to demo1 file
module.exports = ankit;

//}