const { Book, Author } = require("../models/model");

const AuthorController = {
  //ADD AUTHOR
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const saveAuthor = await newAuthor.save();
      res.status(200).json(saveAuthor);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //GET ALL AUTHOR
  getAllAuthor: async (req, res) => {
    try {
      const authors = await Author.find();
      res.status(200).json(authors);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //get an author
};

module.exports = AuthorController;
