const express =require("express")

const app  =express()

app.get("/",(req,res)=>{
    res.send("welcome")
})
app.get("/admin",(req,res)=>{
    res.send("this is the secret")
})
app .listen(3000)