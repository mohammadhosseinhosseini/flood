import React from 'react'
import FilterSwitch from './FilterSwitch'
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone'

function ShelterFilters({
    showHotels,
    changeShowHotels,
    showHospitals,
    changeShowHospitals,
}) {
    return (
        <div>
            <h4>Shelter Filters</h4>
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
    )
}

export default ShelterFilters
