import { IconButton } from '@mui/material'
import React from 'react'
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone'
import helpItems from './helpItems.json'

export const HelpModal = ({ handleClose, show }) => {
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
                        {helpItems.map((item, index) => (
                            <div key={index} className='item'>
                                <div className='icon'>
                                    <img src={`./images/${item.image}`} />
                                </div>
                                <div className='text'>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}
