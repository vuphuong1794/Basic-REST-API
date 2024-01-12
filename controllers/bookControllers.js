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

  //get a book
  getABook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id).populate("author");
      res.status(200).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //update book
  updateBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      await book.updateOne({ $set: req.body });
      res.status(200).json("Update book successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //delete a book
  //vua xoa sach trong get all bôok vua xoa sach trong mang sach cua tac gia
  deleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        { books: req.params.id },
        { $pull: { books: req.params.id } }
      );
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("delete book successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = bookControllers;
