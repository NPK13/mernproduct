const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())
require('./db')
app.listen(4001,function()
{
    console.log("server started")
})