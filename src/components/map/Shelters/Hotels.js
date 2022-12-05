import React from 'react'

import hotelMarker from '../../icons/hotel.png'
import hotels from '../../../data/hotels.json'
import LocationGeoJson from './LocationGeoJson'

function Hotels() {
    return (
        <div>
            <LocationGeoJson data={hotels} icon={hotelMarker} />
        </div>
    )
}

export default Hotels
