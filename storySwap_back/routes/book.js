const { Router } = require('express');
const { getAllBooks, createNewBook, getBookById, deleteBook, updateBook, getGenres } = require('../controllers/book');
const { validateJWT } = require('../middlewares/verifyJWT');
const { verifyAdminRole } = require('../middlewares/verifyAdminRole');
const router = Router();

router.get("/genres", getGenres);
router.get("/", getAllBooks);
router.post("/", [validateJWT, verifyAdminRole], createNewBook);
router.get("/:id", getBookById);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

module.exports = router;