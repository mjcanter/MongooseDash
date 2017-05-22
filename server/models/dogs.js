var mongoose = require('mongoose');

var DogSchema = new mongoose.Schema({
  name: {type: String},
},{timestamps: true})

mongoose.model("Dog", DogSchema);
var Dog =  mongoose.model('Dog');