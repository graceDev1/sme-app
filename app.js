const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.send({msg: "tout va bien "})
})

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`server is running on port ${port}`))
