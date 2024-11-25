const { Router } = require('express');
const { getAllHistorys, createNewHistory, getHistoryById, deleteHistory, updateHistory } = require('../controllers/history');
const router = Router();

router.get("/", getAllHistorys);
router.post("/", createNewHistory);
router.get("/:id", getHistoryById);
router.delete("/:id", deleteHistory);
router.put("/:id", updateHistory);

module.exports = router;