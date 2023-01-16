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
    const [value, setValue] = useState(opacity)
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
            <TextField
                id='outlined-select-currency'
                select
                label='Flood Risk Liklihood'
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

            <div className={`mx-3 mt-1 ${showFlood === 'hide' && 'd-none'}`}>
                <FilterSwitch
                    label='Boundries'
                    checked={filters.showBoundries}
                    onChange={(checked) => {
                        changeFilters(checked, 'showBoundries')
                    }}
                    icon={<ShowChartTwoToneIcon />}
                />
            </div>
            <div className='d-flex align-items-center'>
                <p className='mb-0 me-3' style={{ width: 20 }}>
                    {value}
                </p>
                <FloodOpacitySlider value={value} setValue={setValue} />
                <div className='ms-3'>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            changeFilters(true, 'changeFlood')
                            setOpacity(value)
                        }}
                        disabled={filters.changeFlood}
                    >
                        Change
                    </Button>
                </div>
            </div>
            <div className='mx-3'>
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
                />
                <FilterSwitch
                    label='Flood affected buildings'
                    checked={filters.showFloodAffectedBuildings}
                    onChange={(checked) => {
                        changeFilters(checked, 'showFloodAffectedBuildings')
                    }}
                    // icon={<GroupsTwoToneIcon />}
                />
            </div>
        </div>
    )
}

export default FloodFilter
