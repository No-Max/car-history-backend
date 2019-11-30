const worksController = require('./../controllers/works.js');

exports.init = function(app) {
    // works
    app.get('/works', worksController.all);
    app.get('/works/:id', worksController.findById);
    app.post('/works', worksController.create);
    app.put('/works/:id', worksController.update);
    app.delete('/works/:id', worksController.delete);
};
