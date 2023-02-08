const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 
app.get('/get-hello', (req, res) => {
    console.log(req.query);
    res.status(200).send("Hello Brother");
  //res.send('Hello World!')
})
 
app.post('/get-hi', (req, res) => {
    let data = req.body;
    res.status(201).send("Hello Brother");
    res.send('Data Received: ' + JSON.stringify(data));
})


  
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})