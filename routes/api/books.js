const
    router = require("express").Router(),
    booksController = require("../../controllers/bookscontroller");

// Matches with "/api/books"
router
    .route("/")
    .get(booksController.findAll)
    .post(booksController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);

module.exports = router;