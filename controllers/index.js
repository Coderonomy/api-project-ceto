const express = require('express');
const router = express.Router();

router.use('/', require('./publicRoutes'));
router.use('/auth',require('./authRoutes'));
router.use('/protected', require('./protectedRoutes'));


module.exports = router;