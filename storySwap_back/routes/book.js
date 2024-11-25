const { Router } = require('express');
const { getAllBooks, createNewBook, getBookById, deleteBook, updateBook } = require('../controllers/book');
const router = Router();

router.get("/", getAllBooks);
router.post("/", createNewBook);
router.get("/:id", getBookById);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

module.exports = router;