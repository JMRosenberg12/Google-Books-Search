const axios = require("axios");
const db = require("../models");

// make sure the defining methods are used for the googleController

// the findAll method helps you search with the Google Books API and returns only the entries we haven't already saved

// It also helps to make sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params
            })
            .then((results) =>
                results.data.items.filter(
                    (result) =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then((apiBooks) =>
                db.Book.find().then((dbBooks) =>
                    apiBooks.filter((dbBooks) =>
                        dbBooks.every((dbBooks) => dbBook.googleId.toString() !== apiBook.id)
                    )
                )
            )
            .then((books) => res.json(books))
            .catch((err) => res.status(500).json(err));
    }
};