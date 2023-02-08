const express = require('express')
const app = express()
const port = 3000
const {sum} = require('./calculationHelper.js')
/*
function sum(a,b){
    return (a+b);
}
*/

app.get('/get-helloo', (req, res) => {
  /*
  let a=req.query.a;
    let b=req.query.b;
    const result = sum(parseInt(a),parseInt(b))
    */
   const result = sum(2,4);
    console.log("Sum is:" +result);
   //res.status(201).send("Sum Demo");
    res.send('Hello World! Ankit')
  });
  app.get('/get-hii', (req, res) => {
    res.status(201).send("hello");
    //res.send('Hello World! Mhrzn')
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
