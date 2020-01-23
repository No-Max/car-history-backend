const express = require('express');
const db = require('./db');
const routes = require('./routes');
const path = require('path');
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3012;

app.use(cors());

routes.init(app);

db.connect(function(err) {
	if(err){ return console.log(err) };
	app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
});

