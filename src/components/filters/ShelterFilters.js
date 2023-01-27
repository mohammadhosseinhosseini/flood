import React from 'react'
import FilterSwitch from './FilterSwitch'
import HotelTwoToneIcon from '@mui/icons-material/HotelTwoTone'
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone'
import { Button } from '@mui/material'
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone'
import ClassTwoToneIcon from '@mui/icons-material/ClassTwoTone'
import FireTruckIcon from '@mui/icons-material/FireTruck'

function ShelterFilters({ filters, changeFilters, setFilters }) {
    return (
        <div>
            <h4>Facilities of Interest</h4>
            <div className='mb-3 d-flex justify-content-between'>
                <div className=''>
                    <Button
                        fullWidth
                        variant='outlined'
                        disabled={
                            !filters.showHotels &&
                            !filters.showHospitals &&
                            !filters.showSchools &&
                            !filters.showLibraries &&
                            !filters.showFireStation
                        }
                        onClick={() => {
                            setFilters((prev) => {
                                return {
                                    ...prev,
                                    showHotels: false,
                                    showHospitals: false,
                                    showSchools: false,
                                    showLibraries: false,
                                    showFireStation: false,
                                }
                            })
                        }}
                        startIcon={<VisibilityOffTwoToneIcon />}
                    >
                        Hide All
                    </Button>
                </div>
                <div className=''>
                    <Button
                        fullWidth
                        variant='outlined'
                        disabled={
                            filters.showHotels &&
                            filters.showHospitals &&
                            filters.showSchools &&
                            filters.showLibraries &&
                            filters.showFireStation
                        }
                        onClick={() => {
                            setFilters((prev) => {
                                return {
                                    ...prev,
                                    showHotels: true,
                                    showHospitals: true,
                                    showSchools: true,
                                    showLibraries: true,
                                    showFireStation: true,
                                }
                            })
                        }}
                        startIcon={<RemoveRedEyeTwoToneIcon />}
                    >
                        Show All
                    </Button>
                </div>
            </div>
            <div className='mx-3'>
                <FilterSwitch
                    label='Fire Stations'
                    checked={filters.showFireStation}
                    onChange={(checked) =>
                        changeFilters(checked, 'showFireStation')
                    }
                    icon={<FireTruckIcon />}
                />
                <div className='mb-2'></div>
                <FilterSwitch
                    label='Schools'
                    checked={filters.showSchools}
                    onChange={(checked) =>
                        changeFilters(checked, 'showSchools')
                    }
                    icon={<SchoolTwoToneIcon />}
                />
                <div className='mb-2'></div>

                <FilterSwitch
                    label='Libraries'
                    checked={filters.showLibraries}
                    onChange={(checked) =>
                        changeFilters(checked, 'showLibraries')
                    }
                    icon={<ClassTwoToneIcon />}
                />
                <div className='mb-2'></div>

                <FilterSwitch
                    label='Hotels'
                    checked={filters.showHotels}
                    onChange={(checked) => changeFilters(checked, 'showHotels')}
                    icon={<HotelTwoToneIcon />}
                />
                <div className='mb-2'></div>

                <FilterSwitch
                    label='Hospitals'
                    checked={filters.showHospitals}
                    onChange={(checked) =>
                        changeFilters(checked, 'showHospitals')
                    }
                    icon={<LocalHospitalTwoToneIcon />}
                />
            </div>
        </div>
    )
}

export default ShelterFilters
