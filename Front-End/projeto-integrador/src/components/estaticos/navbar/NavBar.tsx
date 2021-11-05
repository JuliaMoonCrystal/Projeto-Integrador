<<<<<<< HEAD
import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import './NavBar.css'
=======
import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import './NavBar.css'

>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                            ACACIA
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
<<<<<<< HEAD
=======
                        <Link to="/home">
>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
<<<<<<< HEAD
=======
                        </Link>
                        
                        <Link to="/sobre">
>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Sobre Nós
                            </Typography>
                        </Box>
<<<<<<< HEAD
=======
                        </Link>

>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Contato
                            </Typography>
                        </Box>
<<<<<<< HEAD
=======

                        <Link to="/login">
>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                               Login
                            </Typography>
                        </Box>
<<<<<<< HEAD
=======
                        </Link>
>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 3d9f3153e84d82a21020fd813a3850b87226f813
