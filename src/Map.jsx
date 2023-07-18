
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withGoogleMap(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 51.5074, lng: -0.1278 }}>
    <Marker position={{ lat: 51.5074, lng: -0.1278 }} />
  </GoogleMap>
));

function Map() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      {typeof window !== 'undefined' && (
        <MapComponent
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      )}
    </div>
  );
}

export default Map;
