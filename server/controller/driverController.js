//driverController.js

const Driver = require('../models/Driver');
const Driver = require('../models/Location');
const bcrypt = require('bcryptjs');

const { generateJWT } = require('../middleware/authMiddleware');



//ログインしたドライバーのID取得


exports.getDriverId = (req, res) => {
  try {
    const driverId = req.user.driverId;
    res.status(200).json({ driverId });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

//他に必要なら追加していく