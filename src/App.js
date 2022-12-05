import React, { useState } from 'react'
import ShelterFilters from './components/filters/ShelterFilters'
import Header from './components/Layers/Header'
import Map from './components/map/Map'

function App() {
    const [showHotels, setShowHotels] = useState(true)
    const [showHospitals, setShowHospitals] = useState(true)

    const changeShowHotels = (checked) => {
        setShowHotels(checked)
    }

    const changeShowHospitals = (checked) => {
        setShowHospitals(checked)
    }

    return (
        <>
            <Header />
            <div className='container pt-3'>
                <div className='row'>
                    <div className='col-12 col-lg-3'>
                        <ShelterFilters
                            changeShowHotels={changeShowHotels}
                            showHotels={showHotels}
                            changeShowHospitals={changeShowHospitals}
                            showHospitals={showHospitals}
                        />
                    </div>
                    <div className='col'>
                        <Map
                            showHotels={showHotels}
                            showHospitals={showHospitals}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
