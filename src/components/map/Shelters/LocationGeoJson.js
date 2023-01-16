import React, { useState, useEffect, useRef } from 'react'
import { GeoJSON } from 'react-leaflet'
import L, { point } from 'leaflet'
import * as ReactDOMServer from 'react-dom/server'

import hotelMarker from '../../icons/hotel.png'
import hotels from '../../../data/hotels.json'
import PopupText from './PopupText'

function LocationGeoJson({ data, icon }) {
    const onEachFeature = (feature, layer) => {
        // console.log(feature)
        const popupContent = ReactDOMServer.renderToString(
            <PopupText feature={feature} />
        )
        layer.bindPopup(popupContent)
    }

    const pointToLayerHotel = (feature, latlng) => {
        return L.marker(latlng, {
            icon: new L.icon({
                iconUrl: icon,
                iconSize: [40, 40],
                iconAnchor: [20, 20],
                popupAnchor: [1, -20],
                shadowSize: [45, 45],
                shadowAnchor: [15, 25],
                shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
            }),
        })
    }

    return (
        <div>
            {' '}
            <GeoJSON
                data={data}
                pointToLayer={pointToLayerHotel}
                onEachFeature={onEachFeature}
            />
        </div>
    )
}

export default LocationGeoJson
