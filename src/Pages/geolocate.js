import * as React from 'react';
import ReactMapGL, { GeolocateControl } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import {BiLogOut} from 'react-icons/bi'

const TOKEN = 'pk.eyJ1IjoibWF5dXIxNSIsImEiOiJja3VzOGN4cmkxNHV1Mm9wNW51YTBtYTVvIn0.Xeso8Bm-nXyFSca2CXDQMg';

const geolocateControlStyle = {
  right: 10,
  top: 10
};

const Geo = () => {
  const [viewport, setViewport] = React.useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14
  });
  return (

    <div>
      <div className='map-container'>
        <ReactMapGL {...viewport} mapboxApiAccessToken={TOKEN} width="100vw" height="100vh" onViewportChange={setViewport}>
          <GeolocateControl
            style={geolocateControlStyle}
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            auto
          />
          <div>
            <div>
              <a className='icon' href='/'><BiLogOut/></a>
            </div>
          </div>
        </ReactMapGL>
      </div>
    </div>
  );
}

export default Geo;