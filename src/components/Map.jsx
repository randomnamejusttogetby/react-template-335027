import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.css";
import haversine from "haversine";

import axios from "axios";

export default function Map() {
    const [places, setPlaces] = useState([]);
    const [nearby, setNearby] = useState([]);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const lithuania = { lat: 56, lng: 24 };
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

    const markPlace = (place) => {
        const { name, address, rating, longitude: lng, latitude: lat } = place;

        const popupContent = `<p>${name}</p><p>${address}</p><p>${rating}</p>`;

        const mark = new maptilersdk.Marker({ color: "#FF0000" })
            .setLngLat([lng, lat])
            .setPopup(new maptilersdk.Popup().setHTML(popupContent))
            .addTo(map.current);
    };

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [lithuania.lng, lithuania.lat],
            zoom: zoom,
        });
    }, [lithuania.lng, lithuania.lat, zoom]);

    if (places.length) {
        places.forEach((p) => markPlace(p));
        map.current.on("click", (e) => {
            const target = e.lngLat;
            const targetLngLatObj = {latitude: target.lat, longitude: target.lng};
            const nearby = places.map((p) => {
                const {longitude, latitude} = p;
                const pLngLat = {latitude, longitude}
                const dist = haversine(targetLngLatObj, pLngLat)
                return dist
            })
            console.log(nearby)
        });
    }

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}
