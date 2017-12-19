var BookApi = require('../data/bookApi');
var express = require('express');
var router = express.Router();
var bookdb=require('../data/bookApi');

router.get('/', function(req, res) {
  bookdb.getAllBooks(function(err, items) {
    if(err){
      res.send(err);
    }
    res.json(items);
	});
});

router.get('/:id', function(req, res, next) {
	bookdb.getBookById(req.params.id,function(err,book){

    if(err){
      res.send(err);
    }
    res.json(book);
	});
});

router.post('/', function(req, res) {
  var book = req.body;
  bookdb.saveBook(book, function(err, book) {
    if(err){
      res.send(err);
    }
    res.json(book);
  });
});
router.delete('/:id', function(req, res, next) {
	bookdb.deleteBookById(req.params.id,function(err,book){

    if(err){
      res.send(err);
    }
    res.json(book);
	});
});

router.get('/edit/:id', function(req, res) {
  BookApi.getBookById(req.params.id, function(err, book) {
    res.render('book/edit', {book: book});
  });

});

router.put('/:id', function(req, res, next) {
  var updatedBook = req.body;
bookdb.updateBookById(req.params.id, updatedBook, function(err) {

      if(err){
        res.send(err);
      }
      res.json(updatedBook);
    });
  });


module.exports = router;
