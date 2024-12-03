const { Router } = require('express');
const { getAllWishLists, getWishListByUserBook, createNewWishList, getWishListById, deleteWishList, updateWishList } = require('../controllers/wish_list');
const router = Router();

router.get("/:user/:book", getWishListByUserBook);
router.get("/", getAllWishLists);
router.post("/", createNewWishList);
router.get("/:id", getWishListById);
router.delete("/:id", deleteWishList);
router.put("/:id", updateWishList);

module.exports = router;