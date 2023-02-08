const express = require('express')
const app = express()
const port = 3000

app.get('/get-helloo', (req, res) => {
  console.log(req.query);
  res.status(201).send("hello");
  //res.send('Hello World! Ankit')
});
app.get('/get-hii', (req, res) => {
  res.status(201).send("hello");
  //res.send('Hello World! Mhrzn')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})