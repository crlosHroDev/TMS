import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config/index';
import home from './routes/home';
import users from './routes/user';

const app=express()

const USER=encodeURIComponent(config.dbUser)
const PASSWORD=encodeURIComponent(config.dbPassword)
const DB_NAME=config.dbName

const MONGO_URI=`mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}`

mongoose.connect(MONGO_URI,{useNewUrlParser:true}).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('Can not connect to the database'+err)}
)


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