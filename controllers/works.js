var Works = require('../models/works.js');

exports.all = function(req, res){
	Works.all(
		function(err, docs){
			if(err){
				console.log(err)
				return res.sendStatus(500);
			}
			res.send(docs);
		});
};

exports.findById = function (req, res) {
	Works.findById(
		req.params.id, 
		function(err, doc){
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(doc);
		});
};

exports.create = function(req, res){
	Works.create(
		req.body, 
		function(err, result){
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.send(req.body)
		});

};

exports.update = function(req, res){
	Works.update(
		req.params.id, 
		req.body, 
		function (err, result){
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
		});
};

exports.delete = function(req, res){
	Works.delete(
		req.params.id,
		function(err, result){
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);	
		});
};
