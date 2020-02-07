module.exports = app => {

  app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/search', (req, res) => {
    res.render('searchBooks');
  });

  app.get('/add', (req, res) => {
    res.render('addBooks');
  });

};