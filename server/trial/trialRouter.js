'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
var execProcess = require("./sample.js");

router.get('/mongoimport', function(req, res, next) {
  execProcess.result("sh C:/Users/th351985/Desktop/mongo.sh", function(err, response){
    if(!err){
      console.log(response);
      console.log('pusssssssshhhhhhhheeddd');
      // session1.run('match (n:session) where n.name="session1" set n.pushed=[true,false,false,false] return n').then(function(result) {
      //   if(result){
      //     console.log('changed to true');
      //     res.send("changed to true");
      //   }
      // });
    }else {
      console.log(err);
    }
  });

});

module.exports = router;
