const bookControllers = require("../controllers/bookControllers");

const route = require("express").Router();

//ADD BOOK
route.post("/", bookControllers.addBook);

//GET ALL BOOK
route.get("/", bookControllers.getAllBook);

//GET AN BOOK
route.get("/:id", bookControllers.getABook);

//UPDATE A BOOK
route.put("/:id", bookControllers.updateBook);

//DELETE A BOOK
route.delete("/:id", bookControllers.deleteBook);

module.exports = route;
