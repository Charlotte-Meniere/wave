//Require Mongoose
var mongoose = require('mongoose');
var User = require('./User');

//Define a schema
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category',required: true},
  author:   { type: Schema.Types.ObjectId, ref: 'User', required: true},
  content:  { type: String,  required: true },
  date:     { type: Date,    default: Date.now },
  hidden:   { type: Boolean, required: false}
}, { collection: 'Messages' });

//var TestModel = mongoose.model('TestModel', TestSchema );

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Message', MessageSchema );