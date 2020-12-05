const PROXY_CONFIG = [
  {
    context: ["/api"], // anything that starts with /api
    target: "http://localhost:3000", // want to display the app here
    secure: false, // we not using HTTPS
    logLevel: "debug", // logs the call in terminal
  },
];

module.exports = PROXY_CONFIG;
