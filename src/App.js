import React, { useEffect, useState } from 'react'
import ShelterFilters from './components/filters/ShelterFilters'
import Header from './components/Layers/Header'
import Map from './components/map/Map'
import YearSlider from './components/map/YearSlider'
import FloodFilter from './components/filters/FloodFilter'
import HelpModal from './components/help/HelpModal'
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone'
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone'
import { IconButton } from '@mui/material'
import { getApiUrl } from './helper/helper'
import axios from 'axios'
import PopupAlert from './components/alert/PopupAlert'

function App() {
    const [year, setYear] = useState(parseInt(new Date().getFullYear()))
    const [showFlood, setShowFlood] = useState('low')
    const [opacity, setOpacity] = useState(1)
    const [depth, setDepth] = useState({
        low: null,
        medium: null,
        high: null,
    })

    const [alert, setAlert] = useState({
        open: false,
        message: '',
        severity: 'success',
        autohide: true,
    })

    const [filters, setFilters] = useState({
        showHotels: false,
        showHospitals: false,
        showPopulation: false,
        showSchools: false,
        showLibraries: false,
        showHelpModal: true,
        showFireStation: false,
        showBufferZoneAB: false,
        showBufferZone1km: false,
        showFloodAffectedBuildings: false,
        resetFlood: true,
        showFilters: true,
        changeFlood: false,
    })

    useEffect(() => {
        setTimeout(() => {
            changeFilters(false, 'changeFlood')
        }, 100)
    }, [filters.changeFlood])

    const closeAlert = () => {
        setAlert((pre) => ({ ...pre, open: false }))
    }

    const changeFilters = (checked, name) => {
        setFilters({ ...filters, [name]: checked })
    }

    const changeShowFlood = (value) => {
        setShowFlood(value)
    }

    // useEffect(() => {
    //     setFilters({
    //         ...filters,
    //         resetFlood: true,
    //     })
    // }, [opacity])

    useEffect(() => {
        setAlert({
            open: true,
            message: 'Loading data...',
            severity: 'info',
            autohide: false,
        })
        loadData()
    }, [])

    const loadData = async () => {
        await loadDepthLow()
        await loadDepthMedium()
        await loadDepthHigh()
        setAlert({
            open: true,
            message: 'Data loaded successfully',
            severity: 'success',
            autohide: true,
        })
    }

    const loadDepthLow = async () => {
        try {
            const res = await axios.get(
                `https://flood-gis.s3.eu-central-1.amazonaws.com/Flood_Depths_Normalized_Low.json`
            )
            setDepth((prev) => {
                return {
                    ...prev,
                    low: res.data,
                }
            })
        } catch (error) {
            console.log('ERROR')
            console.log(error)
        }
    }

    const loadDepthMedium = async () => {
        try {
            const res = await axios.get(
                `https://flood-gis.s3.eu-central-1.amazonaws.com/Flood_Depths_Normalized_Medium.json`
            )
            setDepth((prev) => {
                return {
                    ...prev,
                    medium: res.data,
                }
            })
        } catch (error) {
            console.log('ERROR')
            console.log(error)
        }
    }

    const loadDepthHigh = async () => {
        try {
            const res = await axios.get(
                `https://flood-gis.s3.eu-central-1.amazonaws.com/Flood_Depths_Normalized_High.json`
            )
            setDepth((prev) => {
                return {
                    ...prev,
                    high: res.data,
                }
            })
        } catch (error) {
            console.log('ERROR')
            console.log(error)
        }
    }

    return (
        <>
            <Header
                toggleShowHelp={() => {
                    setFilters({
                        ...filters,
                        showHelpModal: !filters.showHelpModal,
                    })
                }}
            />
            <div style={{ position: 'relative' }}>
                <Map
                    showFlood={showFlood}
                    opacity={opacity}
                    filters={filters}
                    changeFilters={changeFilters}
                    depth={depth}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 10,
                        left: 100,
                        zIndex: 1000,
                        // backgroundColor: 'white',
                    }}
                >
                    <div
                        className='col-3 col-lg-3 bg-white'
                        style={{
                            borderRadius: '10px',
                            boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
                            padding: 10,
                            width: 300,
                        }}
                    >
                        <div className='d-flex align-items-center'>
                            <h4 className='me-auto mb-0'>Filters</h4>
                            <IconButton
                                color='primary'
                                onClick={() =>
                                    setFilters((prev) => {
                                        return {
                                            ...prev,
                                            showFilters: !prev.showFilters,
                                        }
                                    })
                                }
                            >
                                {filters.showFilters ? (
                                    <VisibilityOffTwoToneIcon />
                                ) : (
                                    <VisibilityTwoToneIcon />
                                )}
                            </IconButton>
                        </div>
                        {filters.showFilters && (
                            <>
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
                                />

                                <ShelterFilters
                                    filters={filters}
                                    changeFilters={changeFilters}
                                    setFilters={setFilters}
                                />
                            </>
                        )}
                    </div>
                    <div className='col'>
                        {/* <div className='mt-4'>
                            <h3 className='m-0'>Year: {year}</h3>
                            <YearSlider year={year} setYear={setYear} />
                        </div> */}
                    </div>
                </div>
                <HelpModal
                    handleClose={() => changeFilters(false, 'showHelpModal')}
                    show={filters.showHelpModal}
                />
                <PopupAlert handleClose={closeAlert} alert={alert} />
            </div>
        </>
    )
}

export default App
