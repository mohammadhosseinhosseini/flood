import React, { useState } from 'react'
import ShelterFilters from './components/filters/ShelterFilters'
import Header from './components/Layers/Header'
import Map from './components/map/Map'
import YearSlider from './components/map/YearSlider'
import FloodFilter from './components/filters/FloodFilter'

function App() {
    const [showHotels, setShowHotels] = useState(false)
    const [showHospitals, setShowHospitals] = useState(false)
    const [year, setYear] = useState(parseInt(new Date().getFullYear()))
    const [showFloodLow, setShowFloodLow] = useState(true)
    const [showFloodMedium, setShowFloodMedium] = useState(true)
    const [showFloodHigh, setShowFloodHigh] = useState(true)
    const [showPopulation, setShowPopulation] = useState(false)
    const [showSchools, setShowSchools] = useState(false)
    const [showLibraries, setShowLibraries] = useState(false)
    const [showFlood, setShowFlood] = useState('low')

    const changeShowHotels = (checked) => {
        setShowHotels(checked)
    }

    const changeShowHospitals = (checked) => {
        setShowHospitals(checked)
    }

    const changeShowFloodLow = (checked) => {
        setShowFloodLow(checked)
    }

    const changeShowFloodMedium = (checked) => {
        setShowFloodMedium(checked)
    }

    const changeShowFloodHigh = (checked) => {
        setShowFloodHigh(checked)
    }

    const changeShowSchools = (checked) => {
        setShowSchools(checked)
    }

    const changeShowPopulation = (checked) => {
        setShowPopulation(checked)
    }

    const changeShowLibraries = (checked) => {
        setShowLibraries(checked)
    }

    const changeShowFlood = (value) => {
        setShowFlood(value)
    }

    return (
        <>
            <Header />
            <div className='container pt-3'>
                <div className='row'>
                    <div className='col-12 col-lg-3'>
                        <FloodFilter
                            showFloodLow={showFloodLow}
                            changeShowFloodLow={changeShowFloodLow}
                            showFloodMedium={showFloodMedium}
                            changeShowFloodMedium={changeShowFloodMedium}
                            showFloodHigh={showFloodHigh}
                            changeShowFloodHigh={changeShowFloodHigh}
                            showPopulation={showPopulation}
                            changeShowPopulation={changeShowPopulation}
                            showFlood={showFlood}
                            changeShowFlood={changeShowFlood}
                        />

                        <ShelterFilters
                            changeShowHotels={changeShowHotels}
                            showHotels={showHotels}
                            changeShowHospitals={changeShowHospitals}
                            showHospitals={showHospitals}
                            showSchools={showSchools}
                            changeShowSchools={changeShowSchools}
                            showLibraries={showLibraries}
                            changeShowLibraries={changeShowLibraries}
                        />
                    </div>
                    <div className='col'>
                        <Map
                            showHotels={showHotels}
                            showHospitals={showHospitals}
                            showFloodLow={showFloodLow}
                            showFloodMedium={showFloodMedium}
                            showFloodHigh={showFloodHigh}
                            showPopulation={showPopulation}
                            showSchools={showSchools}
                            showLibraries={showLibraries}
                            showFlood={showFlood}
                        />
                        <div className='mt-4'>
                            <h3 className='m-0'>Year: {year}</h3>
                            <YearSlider year={year} setYear={setYear} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
