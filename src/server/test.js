const express =require ('express');
const mongoose =require ('mongoose');

const bodyParser =require ('body-parser');
const config =require ('./config/index')

mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('Can not connect to the database'+err)}
)

const app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('hello')
})
