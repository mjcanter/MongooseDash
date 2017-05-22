var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');
var dogs = require('../controllers/dogs.js');
module.exports = function(app) {
  app.get('/', function(req, res) {
      var results = Dog.find({}, function(err, dogs){
      res.render('index', {collections:dogs});
    })
  })
  app.get('/new', function(req, res) {
   res.render("new");
  })

  app.post('/newdogs', function(req,res){
    dogs.create(req,res)
  })

  app.get('/dog/show/:id', function(req, res) {
    dogs.show(req,res)
  })
  app.get('/dog/edit/:id', function(req, res) {
    var this_dog = Dog.find({_id:req.params.id}, function(err, response){
       res.render('edit', {collections:response});
    });
  })
  app.post('/updatedog/:id', function(req,res){
    dogs.update(req,res)
  })
  app.get('/dog/destroy/:id', function(req, res) {
    dogs.destroy(req,res)
  })
}
