const Driver = require('../models/Driver');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../middleware/authMiddleware');

exports.login = async (req, res) => {
  const { driverId, password } = req.body;

  try {
    const driver = await Driver.findOne({ driverId });

    if (!driver) return res.status(400).json({ message : 'User not found' });

    const isMatch = bcrypt.compare(password, driver.password);
    if (!isMatch) return res.status(400).json({ message: 'Password is incorrect'});

    return res.status(200).json({message: 'Login successful', token: 'Bearer ' + generateJWT(driver)});
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err});
  }
}

exports.register = async (req, res) => {
  const { driverId, driverName, password } = req.body;

  try {
    if (await Driver.findOne({ driverId })) return res.status(409).json({ idConflict: true, message: 'Driver Id already exists'});

    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);

    const driverData = {
      driverId,
      driverName,
      password: hashedPassword
    };

    await Driver.create(driverData);

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err});
  }
}