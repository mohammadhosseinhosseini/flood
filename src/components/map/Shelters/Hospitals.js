import React from 'react'

import LocationGeoJson from './LocationGeoJson'

import hospitals from '../../../data/hospitals.json'
import hospitalMarker from '../../icons/hospital.png'

function Hospitals() {
    return (
        <div>
            <LocationGeoJson data={hospitals} icon={hospitalMarker} />
        </div>
    )
}

export default Hospitals
