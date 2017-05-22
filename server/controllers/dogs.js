var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');
module.exports = {
  create: function(req, res) {
		var new_dog = new Dog();
	    new_dog.name = req.body.name;
	    new_dog.save(function(err){
	      if(err){
	        console.log("errors you have errors");
	        res.render("/");
	      }
	      else{
	        console.log(new_dog)
	        res.redirect('/');
	      }
	    })
	},

	show: function(req,res){
		var this_dog = Dog.find({_id:req.params.id}, function(err, response){
       res.render('show', {collections:response});
    })
	},

	update: function(req,res){
		var this_dog = Dog.update({_id:req.params.id}, {name: req.body.name}, function(err, response){
    	res.redirect('/')
    })
	},

	destroy: function(req,res){
	   var this_dog = Dog.remove({_id:req.params.id}, function(err){
       res.redirect('/');
    });
	}
}