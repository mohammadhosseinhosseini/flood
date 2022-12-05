import React, { useState, useEffect, useRef } from 'react'
import {
    MapContainer,
    TileLayer,
    useMap,
    Marker,
    Popup,
    Polygon,
    GeoJSON,
} from 'react-leaflet'
import L, { point } from 'leaflet'
import hotelMarker from '../icons/hotel.png'

import Hotels from './Shelters/Hotels'
import Hospitals from './Shelters/Hospitals'

const center = [51.9607, 7.6261]

function Map({ showHotels, showHospitals }) {
    return (
        <div>
            <MapContainer
                center={center}
                zoom={12}
                scrollWheelZoom={false}
                style={{
                    height: '90vh',
                    width: '100%',
                    backgroundColor: 'gray',
                    marginTop: '8px',
                    marginBottom: '9px',
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {showHotels && <Hotels />}
                {showHospitals && <Hospitals />}
            </MapContainer>
        </div>
    )
}

export default Map
