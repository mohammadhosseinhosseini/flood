import React from 'react'
import FilterSwitch from './FilterSwitch'
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone'
import { Button } from '@mui/material'
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'

function ShelterFilters({
    showHotels,
    changeShowHotels,
    showHospitals,
    changeShowHospitals,
}) {
    return (
        <div>
            <h4>Shelter Filters</h4>
            <div className='mb-3 row'>
                <div className='col-6'>
                    <Button
                        fullWidth
                        variant='outlined'
                        disabled={!showHotels && !showHospitals}
                        onClick={() => {
                            changeShowHotels(false)
                            changeShowHospitals(false)
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
                        disabled={showHotels && showHospitals}
                        onClick={() => {
                            changeShowHotels(true)
                            changeShowHospitals(true)
                        }}
                        startIcon={<RemoveRedEyeTwoToneIcon />}
                    >
                        Show All
                    </Button>
                </div>
            </div>
            <div className='mx-3'>
                <FilterSwitch
                    label='Hotels'
                    checked={showHotels}
                    onChange={changeShowHotels}
                    icon={<HotelTwoToneIcon />}
                />
                <FilterSwitch
                    label='Hospitals'
                    checked={showHospitals}
                    onChange={changeShowHospitals}
                    icon={<LocalHospitalTwoToneIcon />}
                />
            </div>
        </div>
    )
}

export default ShelterFilters
