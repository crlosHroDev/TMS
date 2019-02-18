import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import home from './routes/home';
import users from './routes/user';
import config from './config/index'

mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('Can not connect to the database'+err)}
)

const app=express()
app.use(passport.initialize())
require('./passport')(passport)

//Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.static('dist'));
app.use('/images',express.static('images'))

//API
app.use('/api/users',users)

app.use('/',home)
app.listen(3000)
console.log('el server prendió en el puerto 3000')