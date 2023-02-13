const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()

const login=require("./namepassword")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


function mul(a, b) {
  return (a*b);
}
//const ab={
  //'username':"Ram",
  //'password':"12345"
//}
app.post('/get-hi', (req, res) => {
  
    
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  const result = mul(parseInt(a),parseInt(b))
    console.log("Multiply is:" +result);
    res.status(201).send("Multiply Demo");
} 
)
 //console.log(req.params)
 app.post('/login', (req, res) => {
 const username = req.body.username;
 login(username);
 console.log("Login DEMO\t" +username);
    res.status(201).send("Hello Brother");
   // res.send('Data Received: ' + JSON.stringify(data));
})
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})