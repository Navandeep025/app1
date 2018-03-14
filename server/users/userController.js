'use strict';
const logger = require('./../../applogger');
const users = require('./userEntity').users;

let addUser = (req, res) => {
  let newUser = new user({
    username : req.body.username,
    password : req.body.password
  });
  newUser.save().then((docs) => {
    logger.debug(docs);
    res.send(docs);
  }, (err) => {
    res.status(400).send(err);
    logger.debug('error occurred while adding');
  });
};

var viewUser = (req, res) => {
  // console.log('Inside get');
  user.find().then((docs) => {
      res.send(docs);
      logger.debug(docs);
  },(err) => {
    res.status(400).send(err);
    logger.debug(err);
  });
};

var updateUser = (req, res) => {
  let newPassword = req.body.password;
  // console.log(newPassword);
  user.findByIdAndUpdate(req.params.id,{
    $set:{
      password: newPassword
    }
  }).then((docs) => {
    res.send(docs+"update successfully");
  }, (err) => {
    res.status(400).send(err);
  })
};

var deleteUser = (req, res) => {
  user.findByIdAndRemove(req.params.id).then((docs)=>{
    if(!docs) {
      return console.log('id not found');
    }
    res.send(docs);
    logger.debug('deleted successfully');
  },(err)=> {
    res.status(400).send(err);
  })
};

var login = (req, res) => {
  let username = req.body.username;
  let passwd = req.body.password;
  users.findOne({username: username}).then((docs) => {
    if (docs != null) {
      if (docs.password == passwd) {
        res.send(docs);
      } else {
        res.send("password_mismatch");
      }
    } else {
      res.send("invalid_data");
    }
  }, (err) => {
    //console.log(err);
    res.send("invalid_data");
  });
};

var logout = (req, res) => {
     req.session.destroy();
     res.send({redirect: '/'});
}
var mongo = (req, res) => {
  users.find().then((docs) => {
    if (docs != null) {
      console.log("docs ",docs);
        res.send(docs);

    } else {
      res.send("invalid_data");
    }
  }, (err) => {
    //console.log(err);
    res.send("invalid_data");
  });

}

module.exports = {
  addUser,
  viewUser,
  updateUser,
  deleteUser,
  login,
  logout,
  mongo
};
