const express = require('express')
    const app = express()

process.env.PORT = 3000

app.get("/", (req, res)=>{
    res.status(200).send({"STATUS":"SUCCESS"})
})

app.listen(3000 , ()=>{
    console.log(`STARTED LISTENING ON PORT ${process.env.PORT}`)
})