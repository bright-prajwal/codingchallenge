// routes/userRoutes.js
const router = require('express').Router();
const user = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');
router.get('/', auth, user.getAllUsers);
router.get('/me', auth, user.getCurrentUser);
module.exports = router;