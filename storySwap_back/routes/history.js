const { Router } = require('express');
const { createNewHistory, getHistoryById, deleteHistory, updateHistory, getAllHistories } = require('../controllers/history');
const router = Router();

router.get("/", getAllHistories);
router.post("/", createNewHistory);
router.get("/:id", getHistoryById);
router.delete("/:id", deleteHistory);
router.put("/:id", updateHistory);

module.exports = router;