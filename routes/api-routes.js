const worksController = require('./../controllers/works.js');
const detailsController = require('./../controllers/details.js');
const categoriesController = require('./../controllers/categories.js');

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

    // categories
    app.get('/categories', categoriesController.all);
    app.get('/categories/:id', categoriesController.findById);
    app.post('/categories', categoriesController.create);
    app.put('/categories/:id', categoriesController.update);
    app.delete('/categories/:id', categoriesController.delete);
};
