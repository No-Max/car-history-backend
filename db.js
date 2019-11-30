const MongoClient = require('mongodb').MongoClient;
const config = require('./config.json').db;

var client = new MongoClient(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

var state = {
	db: null
};

exports.connect = function(done){
	if (state.db){
		return done();
	}
	client.connect(function(err){
		if(err){
			return done(err);
		}
		state.db = client.db('car_history');
		done();
	});
};


exports.get = function(){
	return state.db;
};