import React from 'react'
import { IconButton } from '@mui/material'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'
// import { isMobile } from 'react-device-detect'
import { useWindowSize } from '@react-hook/window-size'

import FloodFilter from './FloodFilter'
import ShelterFilters from './ShelterFilters'

const Filters = ({
    filters,
    toggleFilter,
    changeFilters,
    opacity,
    setOpacity,
    showFlood,
    changeShowFlood,
    setFilters,
    setAlert,
}) => {
    const [width, height] = useWindowSize()
    const isMobile = width < 900

    return (
        <div
            style={{
                position: isMobile ? 'fixed' : 'absolute',
                left: isMobile ? 0 : 100,

                zIndex: 1000,
                top: isMobile ? 'auto' : 10,
                bottom: isMobile ? 30 : 'auto',
                width: isMobile ? '100%' : 420,
                // backgroundColor: 'white',
            }}
        >
            <div
                // className='bg-white'
                style={{
                    padding: '0 30px',
                }}
            >
                <div
                    style={{
                        borderRadius: 10,
                        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                        backgroundColor: 'white',
                        width: '100%',
                    }}
                    className={`d-flex ${
                        isMobile ? 'flex-column-reverse' : 'flex-column'
                    }`}
                >
                    <div
                        className='d-flex align-items-center border'
                        style={{
                            borderRadius: 10,
                            boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                            padding: '6px 10px',
                        }}
                    >
                        <h4 className='me-auto mb-0'>Filters</h4>
                        <IconButton
                            color='primary'
                            onClick={() => toggleFilter('showFilters')}
                            disabled={filters.loading}
                        >
                            {filters.showFilters ? (
                                <VisibilityOffTwoToneIcon />
                            ) : (
                                <VisibilityTwoToneIcon />
                            )}
                        </IconButton>
                    </div>

                    <div
                        className='p-3'
                        style={{
                            maxHeight: isMobile ? height - 160 : height - 200,
                            overflow: isMobile ? 'scroll' : 'auto',
                            display: filters.showFilters ? 'block' : 'none',
                        }}
                    >
                        <FloodFilter
                            // showPopulation={showPopulation}
                            // changeShowPopulation={changeShowPopulation}
                            showFlood={showFlood}
                            changeShowFlood={changeShowFlood}
                            opacity={opacity}
                            setOpacity={setOpacity}
                            //
                            filters={filters}
                            changeFilters={changeFilters}
                            setAlert={setAlert}
                        />

                        <ShelterFilters
                            filters={filters}
                            changeFilters={changeFilters}
                            setFilters={setFilters}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters
