const postRoutes=require('../routes/post.router')

const express=require('express')
const dotenv=require('dotenv').config()
const mongoose=require('mongoose');

const app=express();

app.use(express.json())
app.use('/',postRoutes)




mongoose.connect(process.env.MDB_URI)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{
        console.log(`now connected to database`);
    })
    }) 
    .catch((error)=>{
        console.log(error)
    })

