var mongoose = require('mongoose');

var UsrSchema = new mongoose.Schema({
  username: String,
  password: String
});
UsrSchema.pre('add', function (next) {

});
UsrSchema.statics = {
  fetch: function (cb) {
  },
  findByUsername: function (username, cb) {
  }
};
module.exports = UsrSchema
