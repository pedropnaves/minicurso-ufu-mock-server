const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join()))
  .get('/', (req, res) => res.json({'oi':'ola'}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
