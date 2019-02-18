import express from 'express';
import React from 'react';
import {StaticRouter} from 'react-router';
import reactDomServer from 'react-dom/server';
import session from 'express-session';
import App from '../../../dist/ssr/app';

const router=express.Router();

router.use(
    session({
        secret:'Hola',
        resave:false,
        saveUninitialized:false
    })
)

router.get('/',(req,res)=>{
    const html=reactDomServer.renderToString(
    <StaticRouter
        location={req.url}
        context={{
            name:'HRLogis'
        }}
    >
        <App/>
    </StaticRouter>
    )
    res.send(`<!DOCTYPE html>
    <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>TLogis</title>
          <link rel='stylesheet' href='/css/app.css'>
        </head>
        <body>
          <div id="home-container">${html}</div>
          <script src="/js/app.js"></script>
        </body>
      </html>
      `)
})

router.post('/',(req,res)=>{
    if(!req.body.username||!req.body.email||!req.body.password){
        res.status('400')
        res.send('Invalid Details')
    }
})

export default router;