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
    //console.log('res', req.params.title);
    var title = req.params.title;

    db.books.findAll({
      where: {
        title: { [Op.like]: '%' + title + '%' }
      }

    }).then(function (results) {
      res.json(results);
      //console.log('result', results)
    });
  });

  // route for finding book by author
  app.get('/api/book/author/:authorName', (req, res) => {
    var author = req.params.authorName;
    //console.log(author)
    db.books.findAll({
      where: {
        authorName: { [Op.like]: '%' + author + '%' }
      }
    }).then(results => res.json(results));
  });

  // route for finding book by ISBN
  app.get('/api/book/isbn/:ISBN', (req, res) => {
    var ISBN = req.params.ISBN;
    db.books.findOne({
      where: {
        ISBN: { [Op.like]: '%' + ISBN + '%' }
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
      ISBN: req.body.ISBN
    }).then(results => res.json(results));
  });


  // route for adding a book
  app.post('/api/book', (req, res) => {
    db.books.findOrCreate(
      orderedBooks = {
        title: req.body.title,
        authorName: req.body.authorName,
        images: req.body.images,
        year: req.body.year,
        description: req.body.description,
        pageNumbers: req.body.pageNumbers,
        ISBN: req.body.ISBN,
        totalCopies: +1,
        copiesIN: +1,
        where: {
          title: req.body.title,
          authorName: req.body.authorName,
          images: req.body.images,
          year: req.body.year,
          description: req.body.description,
          pageNumbers: req.body.pageNumbers,
          ISBN: req.body.ISBN,
          totalCopies: +1,
          copiesIN: +1,
        }
      }).then(results => {
      res.json(results);
      console.log('match:', results);

      console.log('already exist');
      //}
    });
    // route for updating num of copies
    app.put('api/book/:id', (res, req) => {
      // eslint-disable-next-line no-trailing-spaces
      db.books.update({      
        where:{
          id: req.books.id
        }
      }).then(results => res.json(results));
    });

  });

};


