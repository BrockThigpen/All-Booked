const db = require('../models');
const Sequilize = require('sequelize');
const Op = Sequilize.Op;

module.exports = app => {

  app.get('/api/book/', function (req, res) {
    db.books.findAll({})
      .then(function (dbBooks) {
        res.json(dbBooks);
        console.log('getBooks' + dbBooks);
      });
  });

  // route for finding books by title
  app.get('/api/book/title/:title', (req, res) => {
    var title = req.params.title;

    db.books.findAll({
      where: {
        title: { [Op.like]: '%' + title + '%' }
      }

    }).then(function (results) {
      res.json(results);
    });
  });

  // route for finding book by author
  app.get('/api/book/author/:authorName', (req, res) => {
    var author = req.params.authorName;
    db.books.findAll({
      where: {
        authorName: { [Op.like]: '%' + author + '%' }
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

  app.put('/api/books/isbn/:isbn', function (req, res) {
    db.books.update(
      req.body,
      {
        where: {
          ISBN: req.params.isbn
        }
      }
    )
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
};