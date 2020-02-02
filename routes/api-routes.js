// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/book/", function(req, res) {
    db.books.findAll({})
      .then(function(dbBooks) {
        res.json(dbBooks);
        console.log('getBooks', dbBooks)
      });
  });

 
  // POST route for saving a new post
  app.post("/api/book", function(req, res) {
    console.log(req.body);
    db.books.create({
      title: req.body.title,
      authorName: req.body.authorName,
      images: req.body.images,
      year: req.body.year,
      description: req.body.description,
      pageNumbers: req.body.pageNumbers,
      ISBN: req.body.ISBN
    })
      .then(function(dbBooked) {
        res.json(dbBooked);
      });
  });
 
};
