// Require in Shunter
var shunter = require('shunter');

// Create a Shunter application, passing in options
var app = shunter({

    // Configure the themes path to the current directory
    path: {
        themes: __dirname
    },

    // Configure the proxy route, this should point to
    // where your back end application runs
    routes: {
      "localhost": {
        // "/\\/people\\/[a-zA-Z0-9]{8}\\/?/": {
        //   "host": "localhost",
        //   "port": 3001
        // },
        // "/\\/people\\/?/": {
        //   "host": "localhost",
        //   "port": 3000
        // },
        "default": {
          "host": "localhost",
          "port": 3000
        }
      }
    },
    jsonViewParameter: 'json'
});

// Start the application
app.start();
