# Fortune Cookie App

Select how many fortune cookies you want and crack them open to see your fortune.

This project was built with Angular as the frontend and Express as the backend.

Some npm libraries used

- [fortune-cookie](https://www.npmjs.com/package/fortune-cookie)
- [morgan](https://www.npmjs.com/package/morgan)
- [express](https://www.npmjs.com/package/express)
- [cors](https://www.npmjs.com/package/cors)

This was deployed 2 ways:

1. Application written in Angular, compiled and using a `proxy-config.js` file to divert calls to Express' http://localhost:3000. This was deployed as a static web page in Heroku. Visit [angular-express-fortune-cookie](https://angular-express-fortune-cookie.herokuapp.com/) to see the working app

2. Application written in Angular and deployed as a 'JAM stack application' in Vercel (serverless cloud function). Visit [angular-express-fortune-cookie](https://angular-express-fortune-cookie.vercel.app/) to see the working app
