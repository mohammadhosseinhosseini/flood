import React from 'react'
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

const floodLevels = [
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
    showFloodLow,
    changeShowFloodLow,
    showFloodMedium,
    changeShowFloodMedium,
    showFloodHigh,
    changeShowFloodHigh,
    showPopulation,
    changeShowPopulation,
}) {
    return (
        <div>
            <h4 className=''>Filters</h4>
            {/* <div className='mb-3 row'>
                <div className='col-6'>
                    <Button
                        fullWidth
                        variant='outlined'
                        disabled={
                            !showFloodLow &&
                            !showFloodMedium &&
                            !showFloodHigh &&
                            !showPopulation
                        }
                        onClick={() => {
                            changeShowFloodLow(false)
                            changeShowFloodMedium(false)
                            changeShowFloodHigh(false)
                            changeShowPopulation(false)
                        }}
                        startIcon={<VisibilityOffTwoToneIcon />}
                    >
                        Hide All
                    </Button>
                </div>
                <div className='col-6'>
                    <Button
                        fullWidth
                        variant='outlined'
                        disabled={
                            showFloodLow &&
                            showFloodMedium &&
                            showFloodHigh &&
                            showPopulation
                        }
                        onClick={() => {
                            changeShowFloodLow(true)
                            changeShowFloodMedium(true)
                            changeShowFloodHigh(true)
                            changeShowPopulation(true)
                        }}
                        startIcon={<RemoveRedEyeTwoToneIcon />}
                    >
                        Show All
                    </Button>
                </div>
            </div> */}
            <TextField
                id='outlined-select-currency'
                select
                label='Flood Risk Liklihood'
                value={showFlood}
                fullWidth
                className='my-2'
                onChange={(e) => {
                    changeShowFlood(e.target.value)
                }}
            >
                {floodLevels.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <div className='mx-3'>
                {/* <FilterSwitch
                    label='Flood Hazard Area (Low)'
                    checked={showFloodLow}
                    onChange={changeShowFloodLow}
                    icon={<FloodTwoToneIcon />}
                />
                <FilterSwitch
                    label='Flood Hazard Area (Medium)'
                    checked={showFloodMedium}
                    onChange={changeShowFloodMedium}
                    icon={<FloodTwoToneIcon />}
                />
                <FilterSwitch
                    label='Flood Hazard Area (High)'
                    checked={showFloodHigh}
                    onChange={changeShowFloodHigh}
                    icon={<FloodTwoToneIcon />}
                /> */}
                <FilterSwitch
                    label='Population'
                    checked={showPopulation}
                    onChange={changeShowPopulation}
                    icon={<GroupsTwoToneIcon />}
                />
            </div>
        </div>
    )
}

export default FloodFilter
