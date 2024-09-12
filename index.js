const http = require("http")
const fs = require("fs")


let myserver = http.createServer((req,res)=>{
    let log = `${Date.now()} : New request receiven \n`

    fs.appendFile("log.txt", log, (err, data) =>
    {
        res.end("happy to learn node.js")
    })

    
})

myserver.listen(8031,() =>console.log("server side"))