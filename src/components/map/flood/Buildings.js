import React, { useEffect, useState } from 'react'
import { GeoJSON, Pane } from 'react-leaflet'
import * as ReactDOMServer from 'react-dom/server'

const Buildings = ({ data, opacity }) => {
    const onEachFeatureBuildings = (feature, layer) => {
        const popupContent = ReactDOMServer.renderToString(
            <div style={{ zIndex: 400 }}>
                <p style={{ fontSize: 14 }}>
                    {feature.properties.NAME}
                    <br />
                    {feature.properties.STR_NAME}
                </p>
            </div>
        )
        layer.bindPopup(popupContent)

        layer.setStyle({
            fillOpacity: opacity,
            fillColor: '#969696',
            opacity: opacity,
            color: 'white',
            weight: 2,
        })
    }

    return (
        <Pane
            name='bottom'
            style={{
                zIndex: 399,
            }}
        >
            <GeoJSON data={data} onEachFeature={onEachFeatureBuildings} />
        </Pane>
    )
}

export default Buildings
