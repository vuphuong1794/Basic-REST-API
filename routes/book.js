const bookControllers = require("../controllers/bookControllers");

const route = require("express").Router();

//ADD BOOK
route.post("/", bookControllers.addBook);

//GET ALL BOOK
route.get("/", bookControllers.getAllBook);

module.exports = route;
