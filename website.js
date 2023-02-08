const { Console } = require('console');
const fs = require('fs'); //file system
const http = require('http');
const port = process.env.PORT;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url);
    if(req.url == "/"){
        res.statusCode=200; //ok
        res.end('<h1>This is programming language</h1> <p>Node js is complex</p>')
    }
    else if(req.url == "/about"){
        res.statusCode=200;
        res.end('<h1>About code with ankit</h1> <p>Node js is easy</p>')
    }
    else if(req.url == "/hello"){
        res.statusCode=200;
        const data = fs.readFileSync('index.html') //read the file
        res.end(data.toString());
    }
    else{
       // res.ankit(); //to make server crash and produce error to check
        res.statusCode=404; //not found
        res.end('<h1>Not Found <p>Page is not found on server</p>')
    }
    
})
server.listen(3000, ()=>{
    console.log('Example app listening on port 3000!')
})


