const apiRoutes = require('./api-routes.js');
const bodyParser = require('body-parser');

exports.init = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    apiRoutes.init(app);
};