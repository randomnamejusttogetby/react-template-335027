import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.css";

import axios from "axios";

export default async function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const kaunas = { lat: 56, lng: 24 };
  const zoom = 10;
  maptilersdk.config.apiKey = 'wTdfyLcWw7rfqvFRNgjH';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [kaunas.lng, kaunas.lat],
      zoom: zoom
    });

  }, [kaunas.lng, kaunas.lat, zoom]);

  await fetch("http://konkursas.kitm.lt/backend/558378/api/v1/places")

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}


const fetch = async (url) => {
    const res = await axios.get(url, {
        headers: { "Accept": 'application/json' },
    })

    console.log(res);
}
// curl -X 'GET' 'https://konkursas.kitm.lt/backend/558378/api/v1/places?page=1&per_page=15' -H 'accept: application/json'