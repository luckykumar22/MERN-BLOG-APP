const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const bcrypt= require('bcrypt')
const multer= require('multer')
const path= require('path')
const cookieParser= require('cookie-parser')
const jwt= require('jsonwebtoken')

const app= express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(cookieParser())

app.listen(3000,()=>{
    console.log(`Server Connected to 3000`)
})
