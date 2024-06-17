const Location = require('./model/Location'); // Locationモデルが正しく定義されていることを仮定

const initSocket = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('cl_sendLocation', async (data) => {
      try {
        const location = new Location({
          driverId: data.driverId,
          lat: data.lat,
          lon: data.lon
        });
        await location.save();
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
