module.exports = app => {

  app.get('/', (req, res) => {
    res.render('home');
  });

  app.get('/add', (req, res) => {
    res.render('addBooks');
  });

};