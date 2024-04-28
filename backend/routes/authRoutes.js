const express = require('express');
const cors = require('cors');
const router = express.Router();

const {
    test,
    registerUser
} = require('../controllers/authController');

// Middleware



router.get('/test', test);
router.post('/register', registerUser);

module.exports = router