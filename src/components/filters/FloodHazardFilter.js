import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function FloodHazardFilter() {
    return (
        <FormControl>
            <FormLabel id='demo-row-radio-buttons-group-label'>
                Gender
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
            >
                <FormControlLabel value={0} control={<Radio />} label='Both' />
                <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label='Boundry'
                />
                <FormControlLabel value={2} control={<Radio />} label='Depth' />
            </RadioGroup>
        </FormControl>
    )
}
