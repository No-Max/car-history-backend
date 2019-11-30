const express = require('express');
const db = require('./db');
const routes = require('./routes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3012;

app.use(express.static(path.join(__dirname, 'scripts/dist')));

routes.init(app);

db.connect(function(err) {
	if(err){ return console.log(err) };
	app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
});

