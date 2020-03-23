const express = require('express')

const port = process.env.PORT || 3000
const app = express()

app.get('/',(req,res)=>{
    res.send("MY restfull api")
})

app.listen(port,(req,res)=>{
    console.log(`server running on port ${port}`)
})