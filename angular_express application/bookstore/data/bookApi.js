"use strict";

var books = require('./booksData').books;
var _ = require('lodash');

var currentID = 3;
var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var bookApi = {
	getAllBooks: function(callback) {
		callback(null, _clone(books));
	},
  getBookById: function(id, callback) {
		var book = _.find(books, {id: parseInt(id)});
		callback (null, _clone(book));
  },
  updateBookById: function(id, book, callback) {
			var existingBookIndex = _.indexOf(books, _.find(books, {id: parseInt(id)}));
			book.id = parseInt(id);
			books.splice(existingBookIndex, 1, book);
			callback (null);
  },
	saveBook: function(book, callback) {
		currentID = currentID + 1;
    book.id = currentID;
    books.push(book);
		callback(null, _clone(book));
	},
	deleteBookById: function(id, callback) {
		_.remove(books, { id: parseInt(id)});
    callback(null);
	}
};

module.exports = bookApi;
