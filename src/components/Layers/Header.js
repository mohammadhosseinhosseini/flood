import * as React from 'react'
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'

export default function Header({ toggleShowHelp, changeFilters }) {
    return (
        <Box sx={{ flexGrow: 1, margin: 0 }}>
            <AppBar position='static'>
                <Toolbar>
                    {/* <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ flexGrow: 1 }}
                    >
                        Münster Flood Mapping Project
                    </Typography>
                    <Button
                        onClick={() => {
                            changeFilters(true, 'showAbout')
                        }}
                        // size='small'
                        style={{ color: 'white' }}
                    >
                        About
                    </Button>
                    <IconButton
                        onClick={toggleShowHelp}
                        size='large'
                        style={{ color: 'white' }}
                    >
                        <InfoTwoToneIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
