import React from 'react'
import NavigationTwoToneIcon from '@mui/icons-material/NavigationTwoTone'
import { Button } from '@mui/material'

function PopupText({ feature }) {
    return (
        <div>
            <p style={{ fontSize: 14 }}>
                {feature.properties.NAME}
                <br />
                {feature.properties.STR_NAME}
            </p>
            <a
                style={{
                    textDecoration: 'none',
                    color: '#00bcbf',
                }}
                href={`https://google.com/maps/dir/?api=1&destination=${feature.geometry.coordinates[1]},${feature.geometry.coordinates[0]}`}
                // className='link-warning'
                target='_blank'
            >
                <NavigationTwoToneIcon />
                Navigate
            </a>
        </div>
    )
}

export default PopupText
