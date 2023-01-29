import React, { useEffect, useState } from 'react'
import { GeoJSON, Pane } from 'react-leaflet'
import * as ReactDOMServer from 'react-dom/server'

const Buildings = ({ data, opacity }) => {
    const onEachFeatureBuildings = (feature, layer) => {
        // fix issue of popover not showing up on top of other layers
        //
        // https://stackoverflow.com/questions/57870193/react-leaflet-popup-not-showing-up-on-top-of-other-layers
        //
        //
        // https://stackoverflow.com/questions/57870193/react-leaflet-popup-not-showing-up-on-top-of-other-layers

        const popupContent = ReactDOMServer.renderToString(
            <div>
                <p style={{ fontSize: 14 }}>{feature.properties.funktion}</p>
            </div>
        )
        layer.bindPopup(popupContent, {
            className: 'popup',
            offset: [0, -10],
            closeButton: true,
            maxWidth: 100,
        })

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
                zIndex: 400,
            }}
        >
            <GeoJSON data={data} onEachFeature={onEachFeatureBuildings} />
        </Pane>
    )
}

export default Buildings
