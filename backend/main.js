// load libraries
const express = require('express')
const fortuneCookie = require('fortune-cookie')
const morgan = require('morgan')

// configuration
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

// create an instance of express
const app = express()

// use morgan to log all requests. use the 'combined' format
app.use(morgan('combined'))

// resources
app.get('/', (req, res) => {
  res.status(200)
  res.type('html')
  res.send('<h1>Homepage</h1>')
})

// fortuneCookie[0] is how to get 1st cookie text
// https://github.com/reggi/fortune-cookie/blob/master/fortune-cookie.json
// GET /api/cookie --> application/json { cookie: 'cookie text' }
// GET /api/cookie?count=4 --> application/json [ { cookie: 'cookie text' }]
app.get('/api/cookie/', (req, res) => {
  res.status(200)
  res.type('application/json')
  res.send(fortuneCookie[0])
})

// any path not matching, send back to homepage
app.use('/', (req, res) => {
  res.status(200)
  res.redirect('/')
})

// start the server
app.listen(PORT, () => {
  console.info(`Application started on port ${PORT} on ${new Date()}`)
})
