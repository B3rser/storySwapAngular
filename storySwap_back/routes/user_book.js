const { Router } = require('express');
const { getAllUserBooks, createNewUserBook, getUserBookById, deleteUserBook, updateUserBook } = require('../controllers/user_book');
const router = Router();

router.get("/", getAllUserBooks);
router.post("/", createNewUserBook);
router.get("/:id", getUserBookById);
router.delete("/:id", deleteUserBook);
router.put("/:id", updateUserBook);

module.exports = router;