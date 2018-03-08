var mongoose = require('mongoose');
var UsrSchema = require('../schemas/user');
var Usr = mongoose.model('Usr', UsrSchema)

module.exports = Usr
