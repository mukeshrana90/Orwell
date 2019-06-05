import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
  center: {
    lat: 45.695319,
    lng: 9.035308,
  },
  zoom: 15,  
}

const AnyReactComponent = ({ text }) => <div className="mapMarker">{text}</div>

const GoogleMap = () => (
  <div style={{ height: '500px', width: '100%' }}>
      
    <GoogleMapReact    
      // bootstrapURLKeys={{ key: 'AlzaSyBRKoTpCZsUXfcXyxHxoK-PpXMHYwfqs8o' }}
      bootstrapURLKeys={{ key: 'AIzaSyD4TAlA5IU9S4asFTOUxUQ3NjwJXa62Xyk' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}      
    >
      <AnyReactComponent
        lat={45.695319}
        lng={9.035308}
        text={''}                
      />
    </GoogleMapReact>
  </div>
)

export default GoogleMap
