const { Book, Author } = require("../models/model");

const bookControllers = {
  //ADD BOOK
  addBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const saveBook = await newBook.save();
      if (req.body.author) {
        const author = Author.find({ _id: req.body.author });
        await author.updateOne({ $push: { books: saveBook._id } });
      }
      res.status(200).json(saveBook);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET ALL BOOK
  getAllBook: async (req, res) => {
    try {
      const Books = await Book.find();
      res.status(200).json(Books);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = bookControllers;
