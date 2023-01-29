import React, { useEffect } from 'react'
import { GeoJSON, Pane } from 'react-leaflet'

import floodHazardBoundry from '../../../data/Flood_hazard_Medium.json'
import Buildings from './Buildings'
import flood_buildings from '../../../data/flood_buildings/Flooded_Buildings_Clipped_Medium.json'

function FloodMedium({ opacity, depth, filters }) {
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
        if (
            feature.properties.T_class === '11' ||
            feature.properties.T_class === '31'
        ) {
            fillColor = '#d3e1fe'
        } else if (
            feature.properties.T_class === '12' ||
            feature.properties.T_class === '32'
        ) {
            fillColor = '#769fff'
        } else if (
            feature.properties.T_class === '13' ||
            feature.properties.T_class === '33'
        ) {
            fillColor = '#5680ef'
        } else if (
            feature.properties.T_class === '14' ||
            feature.properties.T_class === '34'
        ) {
            fillColor = '#3561df'
        } else if (
            feature.properties.T_class === '15' ||
            feature.properties.T_class === '35'
        ) {
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
                fillOpacity: opacity.flood,
                weight: 0,
            })
        }
    }

    if (depth === null || opacity.flood === 0) return null

    return (
        <div>
            {filters.showBoundries && (
                <Pane
                    name='top'
                    style={{
                        zIndex: 400,
                    }}
                >
                    <GeoJSON
                        data={floodHazardBoundry}
                        onEachFeature={onEachFeature}
                    />
                </Pane>
            )}
            {filters.showFloodAffectedBuildings && (
                <Buildings data={flood_buildings} opacity={opacity.building} />
            )}
            {filters.showFloodDepth && (
                <Pane
                    name='middle'
                    style={{
                        zIndex: 398,
                    }}
                >
                    <GeoJSON data={depth} onEachFeature={onEachFeatureDepth} />
                </Pane>
            )}
        </div>
    )
}

export default FloodMedium
