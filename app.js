// Require in Shunter
var shunter = require('shunter');

//Require i18n.node modules
var i18n = require('i18n');

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


  i18n.configure({
    locales:['en', 'de'],
    directory: __dirname + '/locales'
  });

// Start the application
app.start();
