import React from 'react'

import libraryMarker from '../../icons/library.png'
import libraries from '../../../data/libraries.json'
import LocationGeoJson from './LocationGeoJson'

function Libraries() {
    return (
        <div>
            <LocationGeoJson data={libraries} icon={libraryMarker} />
        </div>
    )
}

export default Libraries
