const worksController = require('./../controllers/works.js');
const detailsController = require('./../controllers/details.js');

exports.init = function(app) {
    // works
    app.get('/works', worksController.all);
    app.get('/works/:id', worksController.findById);
    app.post('/works', worksController.create);
    app.put('/works/:id', worksController.update);
    app.delete('/works/:id', worksController.delete);
    
    // details
    app.get('/details', detailsController.all);
    app.get('/details/:id', detailsController.findById);
    app.post('/details', detailsController.create);
    app.put('/details/:id', detailsController.update);
    app.delete('/details/:id', detailsController.delete);
};
