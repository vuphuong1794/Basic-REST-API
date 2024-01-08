const AuthorController = require("../controllers/authorControllers");

const router = require("express").Router();

//add Author
router.post("/", AuthorController.addAuthor);

//get all author
router.get("/", AuthorController.getAllAuthor);
module.exports = router;
