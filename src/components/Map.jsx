import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.css";

import axios from "axios";

export default function Map() {
    const [places, setPlaces] = useState([]);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const kaunas = { lat: 56, lng: 24 };
    const zoom = 6;
    maptilersdk.config.apiKey = "wTdfyLcWw7rfqvFRNgjH";

    useEffect(() => {
        const fetchPlaces = async () => {
            const res = await axios.get(
                "https://konkursas.kitm.lt/backend/558378/api/v1/places"
            );

            setPlaces(res.data.data);
        };

        fetchPlaces();

    }, []);

    const markPlace = (lng, lat) => new maptilersdk.Marker({color: "#FF0000"}).setLngLat([lng, lat]).addTo(map.current);

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [kaunas.lng, kaunas.lat],
            zoom: zoom,
        });


    }, [kaunas.lng, kaunas.lat, zoom]);


    if (places.length)
    places.forEach((p) => markPlace(p.longitude, p.latitude))

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

