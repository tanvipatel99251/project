const express = require ("express")
const app = express()
const PORT = 5000
const path = require ("path")


app.get("/",(req,resp)=>{
    // resp.send("this is index page")
    resp.sendFile(path.join(__dirname,"index.html"))
})


app.get("/home",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"home.html"))
})

app.get("*",(req,resp)=>{
    resp.send("404 : page not found")
})



app.listen(PORT,()=>{
    console.log("server running on port:"+PORT);
})