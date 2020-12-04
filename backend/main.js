const cors = require('cors')
// load libraries
const express = require('express')
const fortuneCookie = require('fortune-cookie')
const morgan = require('morgan')

const randomCookies = () => {
  // console.info('fortuneCookie.length ---> ', fortuneCookie.length) // 250
  const indexOfCookie = Math.floor(Math.random() * fortuneCookie.length)
  // console.info('indexOfCookie ---> ', indexOfCookie)
  return fortuneCookie[indexOfCookie]
}

// configuration
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 3000

// create an instance of express
const app = express()

// use morgan to log all requests. use the 'combined' format
app.use(morgan('combined'))

// resources
// // if want to use for all paths
// app.use(cors())

// fortuneCookie[0] is how to get 1st cookie text
// https://github.com/reggi/fortune-cookie/blob/master/fortune-cookie.json
// GET /api/cookie --> application/json { cookie: 'cookie text' }
// GET /api/cookie?count=4 --> application/json [ { cookie: 'cookie text' }]
app.get('/api/cookie/', cors(), (req, res) => {
  const numberOfFortuneCookies = parseInt(req.query['count']) || 1 // req.query is the query after '?' .../?count=xx
  // console.info('cookieNum query ---> ', numberOfFortuneCookies)

  res.status(200)
  res.type('application/json')

  if (numberOfFortuneCookies == 1) res.json({ cookie: randomCookies() })
  else {
    const cookies = []
    for (let i = 0; i < numberOfFortuneCookies; i++)
      cookies.push({ cookie: randomCookies() })
    res.json(cookies)
    // console.info('cookies ---> ', cookies)
  }
})

// serve the frontend directory/folder (like using public or static)
app.use(express.static(__dirname + '/frontend'))

// any path not matching, send back to homepage
app.use('/', (req, res) => {
  res.status(200)
  res.redirect('/')
})

// start the server
app.listen(PORT, () => {
  console.info(`Application started on port ${PORT} on ${new Date()}`)
})
