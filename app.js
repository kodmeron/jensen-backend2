const credentials = {secretUser:"username" , secretPassword:"password"}
const cors = require("cors")
const express = require('express')
const app = express()


process.env.PORT = 3000

app.use(cors())
app.get("/", (req, res)=>{
    const encodedAuth = (req.headers.authorization || '')
        .split(' ')[1] || ''

    const [name, password] = Buffer.from(encodedAuth, 'base64')
    .toString().split(':')
    if (username===credentials.secretUser && password===credentials.secretPassword){
        res.status(200).send({"STATUS":"SUCCESS BRRRROOOORRRR"})
    }else{
        res.set('WWW-Authenticate', 'Basic realm="Access to Index')
        res.status(401).send("Unauthorized access")
    }

    
})

app.listen(3000 , ()=>{
    console.log(`STARTED LISTENING ON PORT ${process.env.PORT}`)
})