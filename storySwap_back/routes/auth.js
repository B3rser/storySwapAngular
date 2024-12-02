const { Router } = require('express');
const { login, register, me } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/verifyJWT');
const router = Router();

router.post("/login", login);
router.post("/register", register)
router.get('/me', validateJWT, me);

module.exports = router;