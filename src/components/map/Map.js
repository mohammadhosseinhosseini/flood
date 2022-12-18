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
import FloodLow from './flood/FloodLow'
import FloodMedium from './flood/FloodMedium'
import FloodHigh from './flood/FloodHigh'
import Population from './population/Population'
import Schools from './Shelters/Schools'
import UserPosition from './position/UserPosition'
import Libraries from './Shelters/Libraries'

const center = [51.9607, 7.6261]

function Map({
    showHotels,
    showHospitals,
    showFloodLow,
    showFloodMedium,
    showFloodHigh,
    showPopulation,
    showSchools,
    showLibraries,
}) {
    return (
        <div>
            <MapContainer
                center={center}
                zoom={12}
                scrollWheelZoom={false}
                style={{
                    height: '75vh',
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
                {showSchools && <Schools />}
                {showLibraries && <Libraries />}

                {showFloodLow && <FloodLow />}
                {showFloodMedium && <FloodMedium />}
                {showFloodHigh && <FloodHigh />}
                {showPopulation && <Population />}

                <UserPosition />
            </MapContainer>
        </div>
    )
}

export default Map
