const db = require('../models');

module.exports = app => {
  // route for viewing all books
  app.get('/api/book', (req, res) => {
    db.books.findAll({}).then( results => res.json(results));
  });

  // route for finding books by title
  app.get('/api/book/title/:title', (req, res) => {
    db.books.findAll({
      where: {
        title: req.params.title
      }
    }).then(results => res.json(results));
  });

  // route for finding book by author
  app.get('/api/book/:authorName', (req, res) => {
    db.books.findAll({
      where: {
        authorName: req.params.authorName
      }
    }).then(results => res.json(results));
  });

  // route for finding book by ISBN
  app.get('/api/book/isbn/:isbn', (req, res) => {
    db.books.findAll({
      where: {
        isbn: req.params.isbn
      }
    }).then(results => res.json(results));
  });

  // route for adding a book
  app.post('/api/book', (req, res) => {
    db.books.create({
      title: req.body.title,
      authorName: req.body.authorName,
      images: req.body.images,
      year: req.body.year,
      description: req.body.description,
      pageNumbers: req.body.pageNumbers,
      ISBN: req.body.ISBN,
      totalCopies: req.body.totalCopies,
      copiesIN: req.body.copiesIN
    }).then(results => res.json(results));
  });

  // route for updating num of copies
  app.put('api/book/isbn/:isbn', (res, req) => {
    console.log(res, req);
    db.books.update({
      totalCopies: req.body.totalCopies,
      copiesIN: req.body.copiesIN
    }, {
      where: {
        ISBN: req.params.isbn
      }
    }).then(results => res.json(results));
  });
};
