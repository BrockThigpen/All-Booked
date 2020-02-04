module.exports = app => {
  console.log('working');

  app.get('/', (req, res) => {
    res.render('home');
  });



};
