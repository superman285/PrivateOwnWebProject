console.log("Hello Node.js");

const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("hello Node.js server")
})

server.listen(80);