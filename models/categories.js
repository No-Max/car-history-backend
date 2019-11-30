var ObjectID = require('mongodb').ObjectID;
var db = require('../db');
var collectionName = 'categories';

exports.all = function (cb) {
	db.get().collection(collectionName).find().toArray(
		function(err, docs){
			cb(err, docs);
		});
}

exports.findById = function(id, cb){
	db.get().collection(collectionName).findOne(
		{_id: ObjectID(id)}, 
		function(err, doc){
			cb(err, doc);
		});
};

exports.create = function(work, cb){
	db.get().collection(collectionName).insertOne(
		work, 
		function(err, result){
		cb(err, result);
	});
};

exports.update = function(id, newData, cb){
	db.get().collection(collectionName).updateOne(
		{ _id: ObjectID(id) },
		{ $set: newData },
		{ upsert: false, multi: false },
		function (err, result) {
			cb(err, result);
		});
};

exports.delete = function(id, cb){
	db.get().collection(collectionName).deleteOne(
		{ _id: ObjectID(id)},
		function (err, result) {
			cb(err, result);
		});
};