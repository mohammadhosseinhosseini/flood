import React from 'react'
import { GeoJSON } from 'react-leaflet'

import LocationGeoJson from './LocationGeoJson'

import buildings from '../../../data/buildings.json'
import hospitalMarker from '../../icons/hospital.png'

function Buildings() {
    return (
        <div>
            <GeoJSON data={buildings} />
            {/* <LocationGeoJson data={buildings} icon={hospitalMarker} /> */}
        </div>
    )
}

export default Buildings
