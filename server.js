const { MongoClient } = require('mongodb')
const express =require("express")
let db

const app  =express()
app.set("view engine","ejs")
app.set("views","./views")
app.use(express.static("public"))

app.get("/",async(req,res)=>{
    const allPeoples = await db.collection("people").find().toArray()
    console.log(allPeoples)
     res.render("home",{allPeoples})
})
app.get("/admin",(req,res)=>{
    res.render("admin")
})
app.get("/api/peoples",async (req,res)=>{
    const allPeoples = await db.collection("people").find().toArray()
    res.json(allPeoples)
})
async function start() {
    // Use connect method to connect to the server
    const client=new MongoClient("mongodb://root:root@localhost:27017/MearApp?&authSource=admin")
    await client.connect()
    db = client.db()
    console.log('Connected successfully to server')
    app .listen(3000)
  
    // the following code examples can be pasted here...
  
  }
  start()
