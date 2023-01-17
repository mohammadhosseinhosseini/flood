import React from 'react'
import { GeoJSON } from 'react-leaflet'

// import data from '../../../data/flood_high.json'
// import LocationGeoJson from '../Shelters/LocationGeoJson'
// import depth from '../../../data/Flood_Depths_Normalized_High.json'
import floodHazard from '../../../data/Flood_hazard_High.json'

function FloodHigh({ opacity, depth, filters }) {
    const onEachFeature = (feature, layer) => {
        layer.setStyle({
            fillOpacity: 0,
            opacity: opacity,
            color: '#fdda12',
            weight: 3,
        })
    }

    const onEachFeatureDepth = (feature, layer) => {
        // console.log(JSON.stringify(feature, null, 4));
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
            fillColor = '#133bbf'
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
                fillOpacity: opacity,
                weight: 0,
            })
        }
    }
    if (depth === null) return <div>Loading...</div>

    return (
        <div>
            {filters.showBoundries && (
                <GeoJSON data={floodHazard} onEachFeature={onEachFeature} />
            )}
            <GeoJSON data={depth} onEachFeature={onEachFeatureDepth} />
        </div>
    )
}

export default FloodHigh
