'use strict';
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('../config/');
const logger = require('../applogger');
const passport = require('./../authentication/passport.js');
const connectflash = require('connect-flash');
const multer = require('multer');
let axios = require('axios');
const yaml = require('js-yaml');
const fs = require('fs');
function createApp() {
  const app = express();
  return app;
}

function setupStaticRoutes(app) {
  app.use(express.static(path.resolve(__dirname, '../', 'webclient')));
  return app;
}

function setupRestRoutes(app) {
  // console.log('Inside service setupRestRoutes');
  app.use('/users', require(path.join(__dirname, './users')));
  app.use('/restaurants', require(path.join(__dirname, './restaurants')));

  let storage5 = multer.diskStorage({
   destination: function(req, file, cb) {
       cb(null, 'C:\\Users\\th351985\\Downloads\\DaaS\\DaaS\\server');
   },filename: function(req, file, cb) {
       const name = 'test.yml';
       cb(null, name);
   }
});
const trial = multer({storage: storage5});
  app.post('/trial', trial.any('yml'),  function(req,res) {
      const config = yaml.safeLoad(fs.readFileSync('server/test.yml', 'utf8'));
      const indentedJson = JSON.stringify(config, null, 4);
      let aa = JSON.parse(indentedJson);
      console.log("trail ",aa);
      res.status(200).send(aa);
    });
    app.get('/createjobtemplate', function(req, res){
  path.join(__dirname, '../webclient/components/template/createjob.yml');
  var file = path.join(__dirname, '../webclient/components/template/createjob.yml');
  res.download(file);
  console.log(file);
});
app.get('/deletejobjenkin', function(req, res){
path.join(__dirname, '../webclient/components/template/deletejobjenkin.yml');
var file = path.join(__dirname, '../webclient/components/template/deletejobjenkin.yml');
res.download(file);
console.log(file);
});

  let storage1 = multer.diskStorage({
       destination: function(req, file, cb) {
           cb(null, 'D:\\default.graphdb');
       }
    });
    const uploadComponent = multer({storage: storage1});
    //console.log("inside route");
  app.post('/files', uploadComponent.single('file'), (req, res) => {
    // console.log("inside files");
   const file = req.file; // file passed from client
   const meta = req.body; // all other values passed from the client, like name, etc..
  //  console.log("fileeee", file);
   // console.log("metaaaa", meta);
   axios({
      url: "http://10.142.207.15:8080/redmine/uploads.json?key=b7e7bfe91e3258ef71ff3cea2ba4d747b1c05e5c",
      method: 'post',
      // Content-Type: 'application/octet-stream',
      data: {
        attachments: file
      },
        headers: {
          "Content-Type": "application/octet-stream"
      }
    })
     .then((response) => {
      //  console.log("kjsgcuccu ...................... ",response.data.upload.token);
      //  res.status(200).json(response.data.data)
      res.send(response.data);
     })
     .catch((error) => console.log("error ",error));
  });
  app.use(function(req, res) {
    let err = new Error('Resource not found');
    err.status = 404;
    return res.status(err.status).json({
      error: err.message
    });
  });

  app.use(function(err, req, res) {
    logger.error('Internal error in watch processor: ', err);
    return res.status(err.status || 500).json({
      error: err.message
    });
  });

  return app;
}

function setupMiddlewares(app) {
  //  For logging each requests
  app.use(morgan('dev'));
  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

    app.use(require('express-session')({secret:'accesskey'}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(connectflash());

  const compression = require('compression');
  app.use(compression());

  app.use(function(req,res,next)
  {
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Method','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

  return app;
}

function setupWebpack(app) {
  if (config.NODE_ENV !== 'production') {
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackHotMiddleware = require('webpack-hot-middleware');

    const webpackConfig = require('../webpack.config.js');
    const webpackCompiler = webpack(webpackConfig);

    app.use(webpackHotMiddleware(webpackCompiler));
    app.use(webpackDevMiddleware(webpackCompiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
      colors: true
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}));
    // app.use(webpackDevMiddleware(webpackCompiler, {
    //   noInfo: true,
    //   publicPath: webpackConfig.output.publicPath
    // }));
  }
  return app;
}

function setupMongooseConnections() {
  mongoose.connect(config.MONGO_URL);

  mongoose.connection.on('connected', function() {
    logger.debug('Mongoose is now connected to ', config.MONGO_URL);
  });

  mongoose.connection.on('error', function(err) {
    logger.error('Error in Mongoose connection: ', err);
  });

  mongoose.connection.on('disconnected', function() {
    logger.debug('Mongoose is now disconnected..!');
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      logger.info(
        'Mongoose disconnected on process termination'
        );
      process.exit(0);
    });
  });
}

// App Constructor function is exported
module.exports = {
  createApp: createApp,
  setupStaticRoutes: setupStaticRoutes,
  setupRestRoutes: setupRestRoutes,
  setupMiddlewares: setupMiddlewares,
  setupMongooseConnections: setupMongooseConnections,
  setupWebpack: setupWebpack
};
