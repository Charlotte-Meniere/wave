//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstname:  { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  active: { type: Boolean, default: true },
  banned: { type: Boolean, default: false }
}, { collection: 'Users' });

//var UserModel = mongoose.model('UserModel', UserSchema );

//Export function to create "SomeModel" model class
module.exports = mongoose.model('User', UserSchema );