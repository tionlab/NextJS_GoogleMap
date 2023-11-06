import { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "../styles/Map.module.css";

const MapContainer = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    //* Get user's location
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  }, []);

  const defaultCenter = userLocation || {
    lat: 37.554988, 
    lng: 126.924321,
  };

  const handleUserLocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          setUserLocation({ lat: userLat, lng: userLng });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    }
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={{
            left: -8,
            height: "100vh",
            width: "100vw",
          }}
          zoom={16}
          center={defaultCenter}
          options={{
            minZoom: 14,
            disableDefaultUI: true,
            streetViewControl: false,
            zoomControl: false,
            clickableIcons: false,
          }}
        >
          <Marker
            className={styles.here}
            position={userLocation}
            icon={{
              url: "./images/here.png",
            }}
          />
        </GoogleMap>
      </LoadScript>
      <a
        className={styles.userlocationbutton}
        onClick={handleUserLocationButtonClick}
      >
        Move to Current location
      </a>
    </div>
  );
};


export default MapContainer;
