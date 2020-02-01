const db = require('../models');

module.exports = app => {
  // route for finding books by title
  app.get('/api/Books/title/:title', (req, res) => {
    db.Books.findAll({
      where: {
        title: req.params.title
      }
    }).then(results => res.json(results));
  });

  // route for finding book by author
  app.get('/api/Books/author/:author', (req, res) => {
    db.Books.findAll({
      where: {
        author: req.params.author
      }
    }).then(results => res.json(results));
  });

  // route for finding book by ISBN
  app.get('/api/Books/isbn/:isbn', (req, res) => {
    db.Books.findOne({
      where: {
        isbn: req.params.isbn
      }
    }).then(results => res.json(results));
  });

  // route for adding a book
  app.post('/api/Books', (req, res) => {
    db.Books.create({
      title: req.body.title,
      authorName: req.body.author,
      description: req.body.description,
      isbn: req.body.isbn,
      images: req.body.img,
      pageNumbers: req.body.pages
    }).then(results => res.json(results));
  });

  // route for updating num of copies
  app.put('api/Books/:id', (res, req) => {
    db.Books.update({
      where: {
        id: req.params.id
      }
    }).then(results => res.json(results));
  });
};