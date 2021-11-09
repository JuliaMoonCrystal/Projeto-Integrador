import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import './NavBar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" color="white"> 
                    <Box className='cursor' padding={3} >
                        <Typography variant="h5" color="inherit">
                            ACACIA
                        </Typography>
                    </Box>

                    <Box display="flex" >
                        <Link to="/home">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        </Link>
                        
                        <Link to="/sobre">
                        <Box mx={1} className='cursor' justifyContent="flex-end">
                            <Typography variant="h6" color="inherit">
                                Sobre nós
                            </Typography>
                        </Box>
                        </Link>

                        <Box mx={1} className='cursor' justifyContent="flex-end" >
                            <Typography variant="h6" color="inherit">
                                Contato
                            </Typography>
                        </Box>

                        <Link to="/login">
                        <Box mx={1} className='cursor' justifyContent="flex-end">
                            <Typography variant="h6" color="inherit">
                               Login
                            </Typography>
                        </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
