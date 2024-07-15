// components/Map.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { io } from 'socket.io-client';

// Leafletのアイコンの設定
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const socket = io('http://localhost:4001');

const Map = () => {

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    socket.on('sv_sendLocationList', (data) => {
      console.log(data);
      setLocations(data);
    });
  },[]);

  return (
    <MapContainer center={[35.1681694 , 136.8857641]} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={location.driverId} position={[location.lat, location.lon]}>
          <Popup>
            Driver Id : { location.driverId }
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;
