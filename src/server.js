import express from 'express';
import React from 'react';
import App from '../dist/ssr/app';
import {StaticRouter} from 'react-router';
import reactDomServer from 'react-dom/server';

const app=express()

app.use(express.static('dist'));
app.use('/images',express.static('images'))

app.get('*',(req,res)=>{
  const html=reactDomServer.renderToString(
  <StaticRouter
    location={req.url}
    context={{
      name:'Carlos Hernandez'
    }}
  >
    <App/>
  </StaticRouter>
  )
  res.write(`<!DOCTYPE html>
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
        <div id="modal-container"></div>
        <script src="/js/app.js"></script>
      </body>
    </html>
    `)
    res.end()
})
app.listen(3000)
console.log('el server prendió en el puerto 3000')