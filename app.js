const express = require("express")
const app = express()
const PORT = 4000
const path = require ("path")

app.get("/get",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"index.html"));
})



app.listen(PORT,()=>{
  console.log("server running on port:" +PORT);
})