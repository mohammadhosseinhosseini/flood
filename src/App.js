import React, { useEffect, useState } from 'react'
import Header from './components/Layers/Header'
import Map from './components/map/Map'
import YearSlider from './components/map/YearSlider'
import HelpModal from './components/help/HelpModal'

import { getApiUrl } from './helper/helper'
import axios from 'axios'
import PopupAlert from './components/alert/PopupAlert'
import Filters from './components/filters/Filters'

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
        autohide: 5000,
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
        showBoundries: true,
    })

    useEffect(() => {
        setAlert({
            open: true,
            message: 'Loading...',
            severity: 'info',
            autohide: 5000,
        })
        setTimeout(() => {
            changeFilters(false, 'changeFlood')
            setAlert({
                open: true,
                message: 'Done!',
                severity: 'success',
                autohide: 2000,
            })
        }, 100)
    }, [filters.changeFlood])

    const closeAlert = () => {
        setAlert((pre) => ({ ...pre, open: false }))
    }

    const changeFilters = (checked, name) => {
        setFilters({ ...filters, [name]: checked })
    }

    const toggleFilter = (name) => {
        setFilters({ ...filters, [name]: !filters[name] })
    }

    const changeShowFlood = (value) => {
        setShowFlood(value)
    }

    useEffect(() => {
        setAlert({
            open: true,
            message: 'Loading data...',
            severity: 'info',
            autohide: 100000,
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
            autohide: 3500,
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
            setAlert({
                open: true,
                message: 'Error loading data',
                severity: 'error',
                autohide: 3500,
            })
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
            setAlert({
                open: true,
                message: 'Error loading data',
                severity: 'error',
                autohide: 3500,
            })
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
            setAlert({
                open: true,
                message: 'Error loading data',
                severity: 'error',
                autohide: 3500,
            })
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

                <Filters
                    filters={filters}
                    toggleFilter={toggleFilter}
                    changeFilters={changeFilters}
                    opacity={opacity}
                    setOpacity={setOpacity}
                    showFlood={showFlood}
                    changeShowFlood={changeShowFlood}
                    setFilters={setFilters}
                    setAlert={setAlert}
                />
                <div className='col'>
                    {/* <div className='mt-4'>
                            <h3 className='m-0'>Year: {year}</h3>
                            <YearSlider year={year} setYear={setYear} />
                        </div> */}
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
