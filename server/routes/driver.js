//driver.js
const express = require('express');
const authController = require('../controller/authController');
const driverController = require('../controller/driverController');
const { authJwt } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);

//GETでログインしたドライバーのID取得
router.get('/driverId', authJwt, driverController.getDriverId);

module.exports = router;
