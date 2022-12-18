import React from 'react'
import { GeoJSON } from 'react-leaflet'

import data from '../../../data/flood_medium.json'
import LocationGeoJson from '../Shelters/LocationGeoJson'

function FloodMedium() {
    const onEachFeature = (feature, layer) => {
        layer.setStyle({
            fillColor: 'orange',
            fillOpacity: 0.3,
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

export default FloodMedium
