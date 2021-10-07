//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  title:  { type: String,  required: true },
  description: { type: String,  required: true },
  allowed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false}],
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: false},
  /* slug: { type: String, slug: "title" } */
}, { collection: 'Categories' });

//var TestModel = mongoose.model('TestModel', TestSchema );

//Export function to create "SomeModel" model class
module.exports = mongoose.model('Category', CategorySchema );