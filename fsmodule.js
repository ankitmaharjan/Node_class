//Program to read the file
const fs = require('fs');
//textfile, encoding, call backfunction includes error and data for possible error or data to print
fs.readFile('file.txt', 'utf8', (err, data)=>{
console.log(err, data)
})
const a = fs.readFileSync('file.txt')
console.log(a.toString())
//will execute first and display the output 
//because while fs.readFile takes time to process the file for error
console.log("Finishes reading file")