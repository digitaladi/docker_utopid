const express = require('express')
require('dotenv').config()

      

const app = express()
   app.get('/', (req, res) => {
    res.send('Hello World! Je suis éxécuté grace à dockerFile')
  })


  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Le serveur écoute le  port ${process.env.SERVER_PORT}`)
  })