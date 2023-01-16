import React, { useEffect, useState } from 'react'
import { GeoJSON } from 'react-leaflet'
import axios from 'axios'
import { getApiUrl } from '../../../helper/helper'
import floodHazard from '../../../data/Flood_hazard_Low.json'
// import depth from '../../../data/Flood_Depths_Normalized_Low.json'

function FloodLow({ opacity, depth }) {
    const onEachFeature = (feature, layer) => {
        layer.setStyle({
            fillOpacity: 0,
            opacity: 1,
            color: 'red',
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

    if (depth === null || opacity === 0) return null

    return (
        <div>
            <GeoJSON data={depth} onEachFeature={onEachFeatureDepth} />
            <GeoJSON data={floodHazard} onEachFeature={onEachFeature} />
        </div>
    )
}

export default FloodLow
