// cookie.js because of /api/cookie
// file need to match resource name
// copied some of these codes below from backend's main.js

// load libraries
const express = require("express");
const fortuneCookie = require("fortune-cookie");
const morgan = require("morgan");

const randomCookies = () => {
  // console.info('fortuneCookie.length ---> ', fortuneCookie.length) // 250
  const indexOfCookie = Math.floor(Math.random() * fortuneCookie.length);
  // console.info('indexOfCookie ---> ', indexOfCookie)
  return fortuneCookie[indexOfCookie];
};

// Note: no PORT

module.exports = (req, res) => {
  // create an instance of express
  const app = express();

  // use morgan to log all requests. use the 'combined' format
  app.use(morgan("combined"));

  app.get("/api/cookie/", (req, res) => {
    const numberOfFortuneCookies = parseInt(req.query["count"]) || 1; // req.query is the query after '?' .../?count=xx
    // console.info('cookieNum query ---> ', numberOfFortuneCookies)

    res.status(200);
    res.type("application/json");

    if (numberOfFortuneCookies == 1) res.json({ cookie: randomCookies() });
    else {
      const cookies = [];
      for (let i = 0; i < numberOfFortuneCookies; i++)
        cookies.push({ cookie: randomCookies() });
      res.json(cookies);
      // console.info('cookies ---> ', cookies)
    }
  });

  // handle error - any resource it can't find will go back to main page
  app.use((req, res) => {
    res.redirect("/");
  });

  // no listen to PORT, pass req, res to express
  app(req, res);
};
