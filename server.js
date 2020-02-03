const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

const db = require('./models');

// Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const api = express.Router();
const html = express.Router();

// Routes
// =============================================================
require('./routes/api-routes.js')(api);
require('./routes/html-routes.js')(html);

app.use(api);
app.use(html);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});