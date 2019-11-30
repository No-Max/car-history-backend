const apiRoutes = require('./api-routes.js');
const clientRoutes = require('./client-routes.js');

exports.init = function(app) {
    clientRoutes.init(app);
    apiRoutes.init(app);
};