  
const router = require("express").Router();
const bookscontroller = require("../../controllers/bookscontroller");

// Matches with "/api/books"
router.route("/")
  .get(bookscontroller.findAll)
  .post(bookscontroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookscontroller.findById)
  .put(bookscontroller.update)
  .delete(bookscontroller.remove);

module.exports = router;