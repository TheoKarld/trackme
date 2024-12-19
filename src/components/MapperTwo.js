//"AIzaSyC0QH9aiCXuuRjJe4k5lzAM2bYl-MUhiPk"
import React, { useState, useEffect, useRef } from "react";
import * as L from "leaflet";
import { datemap, clg } from "../js/basic";
import { startmap } from "../js/maper";
var mapTiles = {
    static: "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
    hybrid: "http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
    satelite: "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
    terrain: "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
  },
  mapKey = "AIzaSyBqJRha92Qfz7IxLftRdWoJkUpVEBMvyDA",
  map_1 = "",
  map_2 = "",
  key = "7OevsHku8lQwYYKVGxtt",
  acuObj = {
    enableHighAccuracy: true,
    timeout: 3000,
    maximumAge: 0,
  },
  def = new L.LatLng(9.7866631, 8.8525467),
  Zoom = 13,
  Tiles = { tile: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" },
  LatLng = [9.7866631, 8.8525467];
const MapperTwo = (props) => {
  var { sendStates } = props,
    [zoom, setZoom] = useState(17),
    [latLng, setLatLng] = useState([9.7866631, 8.8525467]),
    [tile, setTiles] = useState(
      "http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
    ),
    mapRef = useRef(null),
    mapMan;

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

  useEffect(() => {
    mapMan = startmap();
  }, []);

  return (
    <div className="grid gap-32 gap-md-4 mb-8 md:grid-cols-2 xl:grid-cols-2 mt-5">
      <div className="widthun">
        <div id="map" className="maper widthun"></div>
        <div id="map_1_rack"></div>
      </div>
      <div className="widthun">
        <div id="map2" className="maper widthun"></div>
        <div id="map_2_rack"></div>
      </div>
    </div>
  );
};

export default MapperTwo;
