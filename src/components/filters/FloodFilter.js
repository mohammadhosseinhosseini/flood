import React from 'react'
import FilterSwitch from './FilterSwitch'
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone'
import { Button } from '@mui/material'
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'
import FloodTwoToneIcon from '@mui/icons-material/FloodTwoTone'

function FloodFilter({
    showFloodLow,
    changeShowFloodLow,
    showFloodMedium,
    changeShowFloodMedium,
    showFloodHigh,
    changeShowFloodHigh,
}) {
    return (
        <div>
            <h4>Shelter Filters</h4>
            <div className='mb-3 row'>
                <div className='col-6'>
                    <Button
                        fullWidth
                        variant='outlined'
                        disabled={
                            !showFloodLow && !showFloodMedium && !showFloodHigh
                        }
                        onClick={() => {
                            changeShowFloodLow(false)
                            changeShowFloodMedium(false)
                            changeShowFloodHigh(false)
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
                            showFloodLow && showFloodMedium && showFloodHigh
                        }
                        onClick={() => {
                            changeShowFloodLow(true)
                            changeShowFloodMedium(true)
                            changeShowFloodHigh(true)
                        }}
                        startIcon={<RemoveRedEyeTwoToneIcon />}
                    >
                        Show All
                    </Button>
                </div>
            </div>
            <div className='mx-3'>
                <FilterSwitch
                    label='Flood Hazard Area'
                    checked={showFloodLow}
                    onChange={changeShowFloodLow}
                    icon={<FloodTwoToneIcon />}
                />
            </div>
        </div>
    )
}

export default FloodFilter
