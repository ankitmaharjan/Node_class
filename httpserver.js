//const { Console } = require('console'); not neccesary
const http = require('http');
//hamro process lai port pauxa teslai use and process garna
const port = process.env.PORT;

const server = http.createServer((req,res)=>{
    //request object ma bhako sab print garesi shows all the headers, URL and other things
    //console.log(req); jun gardani hunxa, req.url ma auta sentence add garne to display in terminal
    console.log(req.url);
    //to check the response whether the response creates error to server, or bad request to server
    res.statusCode=200;
    //request html type ma serve garna not in print, to tell client know kasto content server le pathako
    res.setHeader('Content-Type', 'text/html')
    //response pathaune
    res.end('<h1>This is programming language</h1> <p>Node js is complex</p>')
})
server.listen(3000, ()=>{
    console.log('Example app listening on port 3000!')
})


