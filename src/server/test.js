import express from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import config from './config/index';
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('Can not connect to the database '+err)}
)

const app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(3000)
console.log('el server prendió en el puerto 3000')
