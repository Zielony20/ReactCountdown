// Importujemy odpowiednie komponenty z React i react-leaflet
import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importujemy styl Leaflet
import icon from './icon.png'; 


// Komponent RestaurantDetails
const ChurchDetails = () => {
  // Dane dotyczące lokalizacji restauracji
  const restaurantLocation = {
    lat: 52.4000975,
    lng: 16.9490678,
  };
  
  const customIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [32, 32], // Dostosuj rozmiar ikony
    iconAnchor: [16, 16], // Dostosuj punkt zakotwiczenia
  });

  // Styl dla mapy Leaflet
  const mapStyle = {
    width: '100%',
    height: '400px',
  };

  return (
    <div>
      {/* Obraz restauracji */}

      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',  // Określona wysokość kontenera
        textAlign: 'center',  // Wyśrodkowanie tekstu
      }}
    >
      <div>
        <h2>Miejsce Ślubu</h2>
        <p>
          Opis Twojego pięknego miejsca ślubu. 
          Możesz tu wpisać dodatkowe informacje o miejscu, datę, godzinę itp.
        </p>
      </div>

      <img
        src="./roch.jpg"  // Upewnij się, że ścieżka jest poprawna
        alt="Church"
        style={{
          maxWidth: '100%',
          height: 'auto',
          width: '400px',  // Określona szerokość obrazka
        }}
      />
      
    </div>
      {/* Mapa z pinezką do kościoła */}
      <MapContainer
        center={restaurantLocation}
        zoom={13}
        style={mapStyle}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={restaurantLocation} icon={customIcon}>
          <Popup>
            Tu weźniemy ślub!
            ul. św Rocha 10
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ChurchDetails;
