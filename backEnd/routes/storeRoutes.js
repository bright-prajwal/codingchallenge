// routes/storeRoutes.js
const router = require('express').Router();
const store = require('../controllers/storeController');
const auth = require('../middleware/authMiddleware');
router.get('/', auth, store.getAllStores);
router.post('/', auth, store.createStore);
module.exports = router;