import React from 'react'
import FilterSwitch from './FilterSwitch'
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone'
import { Button } from '@mui/material'
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'
import FloodTwoToneIcon from '@mui/icons-material/FloodTwoTone'
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone'

function FloodFilter({
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
            <h4>Filters</h4>
            <div className='mb-3 row'>
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
            </div>
            <div className='mx-3'>
                <FilterSwitch
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
                />
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
