import React from 'react';
import { Map, TileLayer } from 'react-leaflet';

function LocationMap({ cordinate }) {
  const { lat, long } = cordinate;
  return (
    <div className="leaflet-container">
      <Map center={[lat, long]} zoom={5}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
}

export default LocationMap;
