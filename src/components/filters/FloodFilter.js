import React, { useEffect, useState } from 'react'
import FilterSwitch from './FilterSwitch'
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone'
import { Button } from '@mui/material'
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'
import FloodTwoToneIcon from '@mui/icons-material/FloodTwoTone'
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import FloodOpacitySlider from './FloodOpacitySlider'
import ShowChartTwoToneIcon from '@mui/icons-material/ShowChartTwoTone'
import FloodHazardFilter from './FloodHazardFilter'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import FloodIcon from '@mui/icons-material/Flood'

const floodLevels = [
    {
        label: 'Hide',
        value: 'hide',
    },
    {
        label: 'Low',
        value: 'low',
    },
    {
        label: 'Medium',
        value: 'medium',
    },
    {
        label: 'High',
        value: 'high',
    },
]

function FloodFilter({
    showFlood,
    changeShowFlood,
    opacity,
    setOpacity,
    filters,
    changeFilters,
    setAlert,
}) {
    const [showFloodTemp, setShowFloodTemp] = useState(showFlood)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        changeShowFlood(showFloodTemp)
        setAlert({
            open: true,
            message: 'Done.',
            severity: 'success',
            autohide: 2000,
        })
        // setLoading(false)
    }, [showFloodTemp])

    return (
        <div>
            <div
                className={`mx-3 mt-1 mb-2 ${showFlood === 'hide' && 'd-none'}`}
            >
                <FilterSwitch
                    label='Flood Hazard Risk Boundary'
                    checked={filters.showBoundries}
                    onChange={(checked) => {
                        changeFilters(checked, 'showBoundries')
                    }}
                    icon={<ShowChartTwoToneIcon />}
                />
            </div>

            <TextField
                id='outlined-select-currency'
                select
                label='Flood Risk Probability'
                value={showFloodTemp}
                fullWidth
                className='my-2'
                onChange={(e) => {
                    setLoading(true)
                    setAlert({
                        open: true,
                        message: 'Loading...',
                        severity: 'info',
                        autohide: 4000,
                    })
                    setShowFloodTemp(e.target.value)
                }}
                disabled={showFlood !== showFloodTemp}
            >
                {floodLevels.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            {/* <FloodHazardFilter /> */}

            <div
                className={`border p-2 mb-2 ${
                    showFlood === 'hide' && 'd-none'
                }`}
                style={{
                    borderRadius: 10,
                }}
            >
                <div className='ps-2'>
                    <FilterSwitch
                        label='Flood Depths'
                        checked={filters.showFloodDepth}
                        onChange={(checked) => {
                            changeFilters(checked, 'showFloodDepth')
                        }}
                        icon={<FloodIcon />}
                    />
                </div>
                {filters.showFloodDepth && (
                    <FloodOpacitySlider
                        changeFilters={changeFilters}
                        opacity={opacity}
                        setOpacity={setOpacity}
                        filters={filters}
                        text='Transparency'
                        name='flood'
                    />
                )}
            </div>

            <div
                className={`border p-2 mb-2 ${
                    showFlood === 'hide' && 'd-none'
                }`}
                style={{
                    borderRadius: 10,
                }}
            >
                <div className='ps-2'>
                    <FilterSwitch
                        label='Potentially Affected Buildings'
                        checked={filters.showFloodAffectedBuildings}
                        onChange={(checked) => {
                            changeFilters(checked, 'showFloodAffectedBuildings')
                        }}
                        icon={<LocationCityIcon />}
                    />
                </div>
                {filters.showFloodAffectedBuildings && (
                    <FloodOpacitySlider
                        changeFilters={changeFilters}
                        opacity={opacity}
                        setOpacity={setOpacity}
                        filters={filters}
                        text='Transparency'
                        name='building'
                    />
                )}
            </div>
        </div>
    )
}

export default FloodFilter

{
    /* <div className='mx-3 mt-3 mb-3'> 
 <FilterSwitch
                    label='Population'
                    checked={filters.showPopulation}
                    onChange={(checked) => {
                        changeFilters(checked, 'showPopulation')
                    }}
                    icon={<GroupsTwoToneIcon />}
                />
                <FilterSwitch
                    label='Flood with bufferzone 1km'
                    checked={filters.showBufferZone1km}
                    onChange={(checked) => {
                        changeFilters(checked, 'showBufferZone1km')
                    }}
                    // icon={<GroupsTwoToneIcon />}
                />
                <FilterSwitch
                    label='bufferzone affected buildings'
                    checked={filters.showBufferZoneAB}
                    onChange={(checked) => {
                        changeFilters(checked, 'showBufferZoneAB')
                    }}
                    // icon={<GroupsTwoToneIcon />}
                /> */
}
// </div>
