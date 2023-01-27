import { IconButton } from '@mui/material'
import React from 'react'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import helpItems from './helpItems.json'
import flood_hazard_help from './flood_hazard_help.json'

const HelpModal = ({ handleClose, show }) => {
    return (
        <>
            {show && (
                <div className='help-modal'>
                    <div className='title-bg'>
                        <IconButton
                            variant='contained'
                            color='primary'
                            onClick={handleClose}
                        >
                            <CloseTwoToneIcon />
                        </IconButton>
                        <h2 className='text-center title'>Legend</h2>
                    </div>
                    <div className='content'>
                        <h3 style={{ fontSize: 20 }}>Flood Hazard Scenario</h3>
                        {flood_hazard_help.map((item, index) => (
                            <div
                                key={index}
                                className='item mt-1 d-flex align-items-center'
                            >
                                <div
                                    style={{
                                        width: 20,
                                        height: 20,
                                        border: `3px solid ${item.color}`,
                                    }}
                                ></div>
                                <div className='text'>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                        <h3 className='mt-2' style={{ fontSize: 20 }}>
                            Water Depths
                        </h3>
                        {helpItems.map((item, index) => (
                            <div key={index} className='item'>
                                <div className='icon'>
                                    <img
                                        src={`./images/${item.image}`}
                                        style={{
                                            width: 20,
                                            height: 20,
                                        }}
                                    />
                                </div>
                                <div className='text'>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                        <h3 className='mt-2' style={{ fontSize: 20 }}>
                            Buildings
                        </h3>

                        <div className='item mt-1 d-flex align-items-center'>
                            <div
                                className='item'
                                style={{
                                    width: 20,
                                    height: 20,
                                    backgroundColor: '#969696',
                                }}
                            ></div>
                            <div className='text'>
                                <p>Potentially Affected Building</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HelpModal

// ,
// {
//     "text": "protected flood area 0–0.5m",
//     "image": "Legend-9.png"
// },
// {
//     "text": "protected flood area >0.5–1m",
//     "image": "Legend-10.png"
// },
// {
//     "text": "protected flood area >1–2m",
//     "image": "Legend-11.png"
// },
// {
//     "text": "protected flood area >2–4m",
//     "image": "Legend-12.png"
// },
// {
//     "text": "protected flood area >4m",
//     "image": "Legend-13.png"
