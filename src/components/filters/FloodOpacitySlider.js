import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

function valuetext(value) {
    return `${value}`
}

export default function FloodOpacitySlider({ value, setValue }) {
    return (
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
    )
}
