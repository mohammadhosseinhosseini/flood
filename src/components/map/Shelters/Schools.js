import React from 'react'

import schoolMarker from '../../icons/school.png'
import schools from '../../../data/schools.json'
import LocationGeoJson from './LocationGeoJson'

function Schools() {
    return (
        <div>
            <LocationGeoJson data={schools} icon={schoolMarker} />
        </div>
    )
}

export default Schools
