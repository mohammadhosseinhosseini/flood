import React, { useState } from 'react'
import { Button, Slider, Box } from '@mui/material'

function valuetext(value) {
    return `${value}`
}

export default function FloodOpacitySlider({
    // value,
    // setValue,
    changeFilters,
    setOpacity,
    filters,
    text,
    name,
    opacity,
}) {
    const [value, setValue] = useState(opacity[name])

    return (
        <div>
            <p className='mb-1 mt-2 '>{text}</p>
            <div className='d-flex align-items-center'>
                <p className='mb-0 me-3' style={{ width: 20 }}>
                    {value}
                </p>
                <Box sx={{ width: '100%' }}>
                    <Slider
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue)
                        }}
                        aria-label='Year'
                        defaultValue={0.7}
                        getAriaValueText={valuetext}
                        valueLabelDisplay='auto'
                        step={0.1}
                        marks
                        min={0}
                        max={1}
                    />
                </Box>
                <div className='ms-3'>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={() => {
                            changeFilters(true, 'changeFlood')
                            setOpacity((pre) => ({
                                ...pre,
                                [name]: value,
                            }))
                        }}
                        disabled={filters.changeFlood}
                    >
                        Change
                    </Button>
                </div>
            </div>
        </div>
    )
}
