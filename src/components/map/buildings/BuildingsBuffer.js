import React, { useEffect, useState } from 'react'
import { GeoJSON } from 'react-leaflet'

import buffer1km from '../../../data/buildings/buffer-1km-geojson.json'
import buffer_zone_affected_buildings from '../../../data/buildings/buffer_zone_affected_buildings.json'
import flood_affected_buildings from '../../../data/buildings/flood_affected_buildings.json'

import flood_low from '../../../data/flood_buildings/Flooded_Buildings_Low_Clipped.json'
import flood_medium from '../../../data/flood_buildings/Flooded_Buildings_Clipped_Medium.json'
import flood_high from '../../../data/flood_buildings/Flooded_Buildings_Clipped_High.json'

const BuildingsBuffer = ({ filters, changeFilters, showFlood }) => {
    const [loading, setLoading] = useState(false)
    const onEachFeature = (feature, layer) => {
        // layer.setStyle({
        //     fillOpacity: 0,
        //     opacity: 1,
        //     color: 'red',
        //     weight: 3,
        // })
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 100)
    }, [showFlood])

    if (loading) {
        return null
    }

    let data = null

    if (showFlood === 'low') {
        data = flood_low
    } else if (showFlood === 'medium') {
        data = flood_medium
    } else if (showFlood === 'high') {
        data = flood_high
    } else {
        data = flood_low
    }
    console.log(showFlood)

    return (
        <div>
            {/* {filters.showBufferZoneAB && (
                <GeoJSON data={buffer_zone_affected_buildings} />
            )}
            {filters.showBufferZone1km && <GeoJSON data={buffer1km} />} */}
            {filters.showFloodAffectedBuildings && (
                <GeoJSON data={data} onEachFeature={onEachFeature} />
            )}
        </div>
    )
}

export default BuildingsBuffer
