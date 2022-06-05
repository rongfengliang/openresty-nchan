const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.json())

app.use("/msg",function(req,res){
    console.log(req.headers)
    let newOb = {
        ...req.body,
        id:Math.random()*1000
    }
    console.log(newOb)
    res.status(200).json(newOb)
})

app.listen("4195",()=>{
    console.log("server starting")
})