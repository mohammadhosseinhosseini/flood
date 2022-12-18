import React from 'react'
import { GeoJSON } from 'react-leaflet'

import data from '../../../data/flood_high.json'
import LocationGeoJson from '../Shelters/LocationGeoJson'

function FloodHigh() {
    const onEachFeature = (feature, layer) => {
        layer.setStyle({
            fillColor: 'orange',
            fillOpacity: 0.6,
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

export default FloodHigh
