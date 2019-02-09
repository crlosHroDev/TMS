import express from 'express';
import home from './routes/home';
import bodyParser from 'body-parser';

const app=express()

//Middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser,json())

app.use(express.static('dist'));
app.use('/images',express.static('images'))

app.use('/',home)
app.listen(3000)
console.log('el server prendió en el puerto 3000')