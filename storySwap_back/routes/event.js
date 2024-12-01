const { Router } = require('express');
const { createNewEvent, getEventById, deleteEvent, updateEvent, getAllEvents } = require('../controllers/event');
const router = Router();

router.get("/", getAllEvents);
router.post("/", createNewEvent);
router.get("/:id", getEventById);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);

module.exports = router;
