const db = require('../models');

module.exports = app => {

  // app.get('/api/book/', function(req, res) {
  //   db.books.findAll({})
  //     .then(function(dbBooks) {
  //       res.json(dbBooks);
  //       console.log('getBooks' +dbBooks);
  //     });
  // });


  // // route for finding books by title
  // app.get('/api/book/:title', (req, res) => {
  //   console.log('res', req.params.title);
  //   var title = req.params.title;
  //   db.books.findAll({
  //     where: {
  //       //title:{ [Op.like]: '%' +req.params.title+ '%'}
  //       title: title,
  //     }
  //   }).then(function(results) {
  //     res.json(results);
  //     console.log('result', results);
  //   });
  // });

  // // route for finding book by author
  // app.get('/api/book/:authorName', (req, res) => {
  //   db.books.findAll({
  //     where: {
  //       authorName: req.params.authorName
  //     }
  //   }).then(results => res.json(results));
  // });

  // // route for finding book by ISBN
  // app.get('/api/book/:ISBN', (req, res) => {
  //   db.books.findOne({
  //     where: {
  //       ISBN: req.params.ISBN
  //     }
  //   }).then(results => res.json(results));
  // });

  // route for adding a book
  app.post('/api/book', (req, res) => {
    db.books.create({
      title: req.body.title,
      authorName: req.body.authorName,
      images: req.body.images,
      year: req.body.year,
      description: req.body.description,
      pageNumbers: req.body.pageNumbers,
      ISBN: req.body.ISBN
    }).then(results => res.json(results));
  });

  // route for updating num of copies
  // app.put('api/book/:id', (res, req) => {
  //   db.books.update({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(results => res.json(results));
  // });
};