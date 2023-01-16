import React, { useEffect } from 'react'
import { GeoJSON } from 'react-leaflet'

// import data from '../../../data/flood_medium.json'
// import LocationGeoJson from '../Shelters/LocationGeoJson'
// import depth from '../../../data/Flood_Depths_Normalized_Medium.json'
import floodHazard from '../../../data/Flood_hazard_Medium.json'

function FloodMedium({ opacity, depth }) {
    const onEachFeature = (feature, layer) => {
        layer.setStyle({
            fillOpacity: 0,
            opacity: 1,
            color: 'orange',
            weight: 3,
        })
    }

    const onEachFeatureDepth = (feature, layer) => {
        var fillColor = 'blue'
        if (feature.properties.T_class === '11') {
            fillColor = '#d3e1fe'
        } else if (feature.properties.T_class === '12') {
            fillColor = '#769fff'
        } else if (feature.properties.T_class === '13') {
            fillColor = '#5680ef'
        } else if (feature.properties.T_class === '14') {
            fillColor = '#3561df'
        } else if (feature.properties.T_class === '15') {
            fillColor = '133bbf'
        }

        if (fillColor === 'blue') {
            layer.setStyle({
                fillOpacity: 0,
                opacity: 0,
                weight: 0,
            })
        } else {
            layer.setStyle({
                fillColor: fillColor,
                fillOpacity: 1,
                weight: 0,
            })
        }
    }

    if (depth === null) return <div>Loading...</div>

    return (
        <div>
            <GeoJSON data={floodHazard} onEachFeature={onEachFeature} />
            <GeoJSON data={depth} onEachFeature={onEachFeatureDepth} />
        </div>
    )
}

export default FloodMedium
