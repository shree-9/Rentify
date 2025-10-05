import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from 'esri-leaflet-geocoder';

// Corrected typo from DefaulIcon to DefaultIcon
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const GeoCoderMarker = ({ address }) => {
    const map = useMap();
    const [position, setPosition] = useState([60, 19]);

    useEffect(() => {
        // Only run if map and address are available
        if (map && address) {
            ELG.geocode().text(address).run((err, results, response) => {
                if (results?.results?.length > 0) {
                    const { lat, lng } = results.results[0].latlng;
                    setPosition([lat, lng]);
                    // Use a more appropriate zoom level for a specific address
                    map.flyTo([lat, lng], 15);
                }
            });
        }
    }, [address, map]); // Add map to the dependency array

    return (
        <Marker position={position} icon={DefaultIcon}>
            <Popup />
        </Marker>
    );
};

export default GeoCoderMarker;