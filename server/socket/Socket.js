const Location = require('../models/Location'); 
const passport = require('passport');
const passportJWT = require('passport-jwt');
const bcrypt = require('bcryptjs');
const express = require('express');
const routes = express.Router();


const socketDriverMap = {}; // 初期化

const initSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('cl_sendLocation', async (dataString) => {
      let data;
      try {
        data = JSON.parse(dataString); // JSON文字列をパース
      } catch (err) {
        return socket.emit('error', 'Invalid JSON format');
      }

      const { driverId, lat, lon } = data;
      if (!driverId || lat === undefined || lon === undefined) {
        return socket.emit('error', 'Missing required fields');
      }

      // driverIdとsocket.idを関連付け
      socketDriverMap[socket.id] = driverId;

      try {
        await Location.create({ driverId, lat, lon });
      } catch (err) {
        console.log('Error saving location:', err.message);
        socket.emit('save_error', { message: 'Failed to save location' });
      }
    });

    // 切断時の処理
    socket.on('disconnect', async () => {
      console.log('Client disconnected');

      const driverId = socketDriverMap[socket.id];
      if (driverId) {
        try {
          // 対応するdriverIdの位置情報を削除
          await Location.deleteMany({ driverId });
          delete socketDriverMap[socket.id];
          console.log(`Locations for driverId ${driverId} successfully deleted`);
        } catch (err) {
          console.log('Error deleting location:', err.message);
        }
      }
    });
  });

  const sendLocationList = async () => {
    try {
      const locations = await Location.find({});
      io.emit('sv_sendLocationList', locations);
    } catch (error) {
      console.error('Error fetching locations from DB:', error);
    }
  };

  setInterval(sendLocationList, 30000);
};

module.exports = initSocket;
