import {createServer} from "node:http"

const server = createServer((req,res) => {
    console.log("request received")

    res.statusCode = 200;

    res.setHeader("Content-type","text/html");

    res.end("<html><body><h1> Questa pagina e stata costruita in Node.js! Benvenuto! </h1></body></html>")
 })

 server.listen(3000,() => {
    console.log(`Server running at http://localhost:3000`)
 }) //la porta del nostro server