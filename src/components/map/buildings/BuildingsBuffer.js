import React from 'react'
import { GeoJSON } from 'react-leaflet'

import buffer1km from '../../../data/buildings/buffer-1km-geojson.json'
import buffer_zone_affected_buildings from '../../../data/buildings/buffer_zone_affected_buildings.json'
import flood_affected_buildings from '../../../data/buildings/flood_affected_buildings.json'

export const BuildingsBuffer = ({ filters }) => {
    return (
        <div>
            {filters.showBufferZoneAB && (
                <GeoJSON data={buffer_zone_affected_buildings} />
            )}
            {filters.showBufferZone1km && <GeoJSON data={buffer1km} />}
            {filters.showFloodAffectedBuildings && (
                <GeoJSON data={flood_affected_buildings} />
            )}
        </div>
    )
}
