// routes/ratingRoutes.js
const router = require('express').Router();
const rating = require('../controllers/ratingController');
const auth = require('../middleware/authMiddleware');
router.post('/', auth, rating.createRating);
router.get('/store/:id', auth, rating.getRatingsByStore);
module.exports = router;