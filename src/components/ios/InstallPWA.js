//InstallPWA.js
import React, { useEffect, useState } from 'react'
import { Modal, Box, Button } from '@mui/material'
// import './PWA.css'
import image from './logo.png'
import share from './share.png'
import threedots from './three-dots.png'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    alignItems: 'center',
    textAlign: 'center',
}

const InstallPWA = ({ android }) => {
    const [modalOpen, setModalOpen] = useState(false)

    useEffect(() => {
        setModalOpen(true)
    }, [])

    const handleClose = () => {
        setModalOpen(false)
    }

    if (window.matchMedia('(display-mode: standalone)').matches) {
        return null
    }

    return (
        <Modal
            open={modalOpen}
            className='notification-card'
            onClose={handleClose}
        >
            <Box sx={style}>
                <div className='uk-container uk-container-small uk-flex uk-flex-middle uk-flex-center uk-height-1-1'>
                    <div
                        style={{ maxWidth: '400px' }}
                        className='uk-card uk-card-default uk-card-body'
                    >
                        <div
                            style={{ marginTop: '-50px' }}
                            className='uk-text-center'
                        >
                            <img
                                src={image}
                                className='uk-border-rounded'
                                height='72'
                                width='72'
                                alt='Install PWA'
                            />
                        </div>
                        <div className='uk-margin-top uk-text-center'>
                            <h3>Install our WebApp!</h3>
                        </div>
                        <p className='uk-h4 uk-text-muted uk-text-center uk-margin-remove-top'>
                            Install this application on your homescreen for a
                            better experience.
                        </p>
                        <div className='uk-text-center'>
                            <p className='uk-text-small'>
                                Tap
                                <img
                                    src={android ? threedots : share}
                                    style={{ margin: 'auto 4px 8px' }}
                                    className='uk-display-inline-block'
                                    alt='Add to homescreen'
                                    height='20'
                                    width='20'
                                />
                                then &quot;Add to Home Screen&quot;
                            </p>
                        </div>
                        <Button onClick={handleClose} variant='contained'>
                            Close
                        </Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default InstallPWA
