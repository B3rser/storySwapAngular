const { Router } = require('express');
const { getAllRequestSwaps, createNewRequestSwap, getRequestSwapById, deleteRequestSwap, updateRequestSwap } = require('../controllers/request_swap');
const router = Router();

router.get("/", getAllRequestSwaps);
router.post("/", createNewRequestSwap);
router.get("/:id", getRequestSwapById);
router.delete("/:id", deleteRequestSwap);
router.put("/:id", updateRequestSwap);

module.exports = router;