const apiRoutes = require('./api-routes.js');

exports.init = function(app) {
    apiRoutes.init(app);
};