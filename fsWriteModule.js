//Program to write the file
const fs = require('fs');
// putting value and call backfunction is needed to write into the file
/*fs.writeFile('file2.txt', "this is data", ()=>{
    console.log("written to the file")
})
*/
//this is override and replace the sentence in file2.txt
b = fs.writeFileSync('file2.txt', "this is data2")
console.log(b)
console.log("Finishes reading file")