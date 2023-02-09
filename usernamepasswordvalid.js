const express = require('express');
const port = 3000;
const app = express();
const bodyParser =require('body-parser');
const logins=require("./namepassword")
app.use(bodyParser.json());

//UrlEncoded Data Parsing
app.use(bodyParser.json());
const ab={
    'username':"ankit",
    'password':"ankit123"
}
app.post('/login',(req,res)=>{
    console.log(req.params); 
    logins.login(ab);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
