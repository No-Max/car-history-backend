var Module = require('../models/works.js');

exports.all = function(req, res){
	Module.all(
		function(err, docs){
			if(err){
				console.log(err)
				return res.sendStatus(500);
			}
			res.send(docs);
		});
};

exports.findById = function (req, res) {
	Module.findById(
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
	Module.create(
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
	Module.update(
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
	Module.delete(
		req.params.id,
		function(err, result){
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);	
		});
};
