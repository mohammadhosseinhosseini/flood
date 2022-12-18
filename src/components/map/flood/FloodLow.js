import React from 'react'
import { GeoJSON } from 'react-leaflet'

import data from '../../../data/flood_low.json'
import LocationGeoJson from '../Shelters/LocationGeoJson'

function FloodLow() {
    const onEachFeature = (feature, layer) => {
        layer.setStyle({
            fillColor: 'orange',
            fillOpacity: 0.2,
            color: 'orange',
            weight: 1,
        })
    }
    return (
        <div>
            <GeoJSON data={data} onEachFeature={onEachFeature} />
        </div>
    )
}

export default FloodLow
