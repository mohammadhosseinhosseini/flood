import React from 'react'
import { GeoJSON } from 'react-leaflet'
import L, { point } from 'leaflet'

import data from '../../../data/Population.json'

function Population() {
    const onEachFeature = (feature, layer) => {
        const popupContent = `
            <div>
                <h3>Population: ${feature.properties.Population}</h3>
                <p>Area: ${feature.properties['Sq. km']}</p>
            </div>
        `
        layer.bindPopup(popupContent)
        // change layer color
        layer.setStyle({
            fillColor: feature.properties.fill,
            fillOpacity: feature.properties['fill-opacity'],
            color: feature.properties.fill,
            weight: 1,
        })

        // on each feature hover to show population
        // layer.on('mouseover', () => {
        //     layer.openPopup()
        // })
        // layer.on('mouseout', () => {
        //     layer.closePopup()
        // })
    }

    return (
        <div>
            <GeoJSON data={data} onEachFeature={onEachFeature} />
        </div>
    )
}

export default Population
