const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

exports.index = (req, res, next) => {

    return Promise.all([
        Book.count({}),
        BookInstance.count({}),
        BookInstance.count({status:'Available'}),
        Author.count({}),
        Genre.count({})
    ]).then((results) => {
        return res.status(200).send({
            book_count: results[0],
            book_instance_count: results[1],
            book_instance_available_count: results[2],
            author_count: results[3],
            genre_count: results[4]
        });
    }).catch((err) => {
       return next(err);
    });
};

// Display list of all books.
exports.book_list = (req, res) => {

Book.find({}, 'title author')
    .populate('author')
    .exec((err, list_books) => {
        if (err) { return next(err); }

        res.status(200).send({book_list: list_books});
    });
};

// Display detail page for a specific book.
exports.book_detail = (req, res) => {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form on GET.
exports.book_create_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
exports.book_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
exports.book_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
exports.book_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Book update POST');
};