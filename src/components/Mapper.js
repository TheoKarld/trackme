import React, { useState, useEffect, useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

var mapTiles = {
    static: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    hybrid: "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
    satelite: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    terrain: "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
  },
  Zoom = 13,
  Tiles = { tile: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" },
  LatLng = [9.7866631, 8.8525467];
const Mapper = (props) => {
  var { sendStates } = props,
    [zoom, setZoom] = useState(13),
    [latLng, setLatLng] = useState([9.7866631, 8.8525467]),
    [tile, setTiles] = useState(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ),
    mapRef = useRef(null);

  function newZoom(ZOOM) {
    Zoom = ZOOM;
    setZoom(ZOOM);
  }
  function newLatLng(LATLNG) {
    LatLng = LATLNG;
    setLatLng([...LatLng]);
  }
  function newTiles(TILES) {
    Tiles = TILES;
    setTiles(TILES.tile);
  }
  sendStates({ zoom: newZoom, latLng: newLatLng, tiles: newTiles });

  return (
    <div className="grid gap-32 gap-md-4 mb-8 md:grid-cols-2 xl:grid-cols-2 mt-5">
      <div>
        <MapContainer
          center={[latLng[0], latLng[1]]}
          zoom={zoom}
          ref={mapRef}
          style={{ width: "100%", height: "300px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url={tile}
          />
          <Marker position={[latLng[0], latLng[1]]}>
            <Popup>Your Current Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapper;
