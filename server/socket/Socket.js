const Location = require('../models/Location'); // Locationモデルが正しく定義されていることを仮定

const initSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('cl_sendLocation', async (data) => {
      
      const { driverId, lat, lon } = data;
      if (!driverId || lat === undefined || lon === undefined) return socket.emit('error', 'Missing required fields');

      try {
        await Location.create({
          driverId,
          lat,
          lon
        });

      } catch (err) {
        console.log('Error saving location:', err.message);
        socket.emit('save_error', { message: 'Failed to save location' });
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
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