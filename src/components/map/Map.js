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
import Buildings from './Shelters/Buildings'
import BuildingsBuffer from './buildings/BuildingsBuffer'
import FireBuildings from './Shelters/FireBuildings'

const center = [51.9607, 7.6261]

function Map({
    showHotels,
    showHospitals,
    showPopulation,
    showSchools,
    showLibraries,
    showFlood,
    opacity,
    showFireStation,
    filters,
    changeFilters,
    depth,
}) {
    return (
        <div>
            <MapContainer
                center={center}
                zoom={12}
                scrollWheelZoom={true}
                // maxZoom={30}
                style={{
                    height: '95vh',
                    width: '100%',
                    backgroundColor: 'gray',
                    // marginTop: '8px',
                    marginBottom: '9px',
                    zIndex: 10,
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {filters.showHotels && <Hotels />}
                {filters.showHospitals && <Hospitals />}
                {filters.showSchools && <Schools />}
                {filters.showLibraries && <Libraries />}
                {/* <Buildings /> */}

                {!filters.changeFlood && (
                    <>
                        {showFlood === 'low' && (
                            <FloodLow
                                opacity={opacity}
                                depth={depth.low}
                                filters={filters}
                            />
                        )}
                        {showFlood === 'medium' && (
                            <FloodMedium
                                opacity={opacity}
                                depth={depth.medium}
                                filters={filters}
                            />
                        )}
                        {showFlood === 'high' && (
                            <FloodHigh
                                opacity={opacity}
                                depth={depth.high}
                                filters={filters}
                            />
                        )}

                        {/* <BuildingsBuffer
                            filters={filters}
                            changeFilters={changeFilters}
                            showFlood={showFlood}
                        /> */}
                    </>
                )}

                {filters.showPopulation && <Population />}
                {filters.showFireStation && <FireBuildings />}

                <UserPosition />
            </MapContainer>
        </div>
    )
}

export default Map
