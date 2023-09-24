const mongoose = require('mongoose')
const express = require('express')
const db  = require('./config/setup').DB
const cors = require('cors')


const app = express()

app.use(cors())
app.use(express.json());
app.use("/", require("./router"));
mongoose.set("debug", true)
mongoose.connect(db).then(()=>{
    console.log("MongoDB connected successfully")
}).catch(err=>console.log(err))


app.listen(5000, () => {
    console.log('Server is running on port 5000')
})