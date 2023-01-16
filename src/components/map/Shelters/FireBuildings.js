import React from 'react'
import { GeoJSON } from 'react-leaflet'
import * as ReactDOMServer from 'react-dom/server'
import NavigationTwoToneIcon from '@mui/icons-material/NavigationTwoTone'
import L, { point } from 'leaflet'

import fire_buildings from '../../../data/shelter/Fire_brigade_num.json'
import fireImage from '../../icons/fire.png'

const FireBuildings = () => {
    const onEachFeature = (feature, layer) => {
        // console.log(feature)
        const popupContent = ReactDOMServer.renderToString(
            <>
                <p>
                    Phone:{' '}
                    <a href={`tel:${feature.properties.contact}`}>
                        {feature.properties.contact}
                    </a>
                </p>
                <div>
                    <p style={{ fontSize: 14 }}>{feature.properties.name}</p>
                    <a
                        style={{
                            textDecoration: 'none',
                            color: '#00bcbf',
                        }}
                        href={`https://google.com/maps/dir/?api=1&destination=${feature.geometry.coordinates[1]},${feature.geometry.coordinates[0]}`}
                        // className='link-warning'
                        target='_blank'
                    >
                        <NavigationTwoToneIcon />
                        Navigate
                    </a>
                </div>
            </>
        )
        layer.bindPopup(popupContent)
    }

    const pointToLayer = (feature, latlng) => {
        return L.marker(latlng, {
            icon: new L.icon({
                iconUrl: fireImage,
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
            <GeoJSON
                data={fire_buildings}
                onEachFeature={onEachFeature}
                pointToLayer={pointToLayer}
            />
        </div>
    )
}

export default FireBuildings
