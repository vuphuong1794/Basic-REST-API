const AuthorController = require("../controllers/authorControllers");

const router = require("express").Router();

//add Author
router.post("/", AuthorController.addAuthor);

//get all author
router.get("/", AuthorController.getAllAuthor);

//get an author
router.get("/:id", AuthorController.getAnAuthor);

//update author
router.put("/:id", AuthorController.updateAuthor);

//delete author
router.delete("/:id", AuthorController.deleteAuthor);
module.exports = router;
