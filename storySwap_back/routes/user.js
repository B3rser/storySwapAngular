const { Router } = require('express');
const { getAllUsers, createNewUser, getUserById, deleteUser, updateUser } = require('../controllers/user');
const router = Router();

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;