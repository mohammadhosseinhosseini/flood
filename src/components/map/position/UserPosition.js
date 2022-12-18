import React, { useEffect, useState } from 'react'
import { Marker } from 'react-leaflet'
import L from 'leaflet'
import mylocation from '../../icons/mylocation.png'

const iconPerson = new L.Icon({
    iconUrl: mylocation,
    iconRetinaUrl: mylocation,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon',
})

function UserPosition() {
    const [position, setPosition] = useState(null)
    useEffect(() => {
        if (navigator?.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                if (location) {
                    setPosition([
                        location.coords.latitude,
                        location.coords.longitude,
                    ])
                }
            })
        }
    }, [])
    return <div>{position && <Marker position={position}></Marker>}</div>
}

export default UserPosition
