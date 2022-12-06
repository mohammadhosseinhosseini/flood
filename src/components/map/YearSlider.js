import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

function valuetext(value) {
    return `${value}`
}

export default function YearSlider({ year, setYear }) {
    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                value={year}
                onChange={(event, newValue) => {
                    setYear(newValue)
                }}
                aria-label='Year'
                defaultValue={2022}
                getAriaValueText={valuetext}
                valueLabelDisplay='auto'
                step={1}
                marks
                min={1950}
                max={2022}
            />
        </Box>
    )
}
