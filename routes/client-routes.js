const bodyParser = require('body-parser');

exports.init = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.set('view engine', 'html');
    app.get('/', (req, res) => res.render('scripts/dist/index'));
};