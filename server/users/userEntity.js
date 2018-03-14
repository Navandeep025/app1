const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let schema = new mongoose.Schema({
  username : String,
  password : String,
  usertype: String,
  score: Number
});

let users = mongoose.model('users', schema);
module.exports = {
  users : users
}
