import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import './NavBar.css';
import useLocalStorage from 'react-use-localstorage';

    function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();

    function Lougout() {
        setToken('');
        history.push('/Login');
        alert('Usuario delogado com sucesso')
    }

    return (
        <>
            <AppBar position="static" className="Header">
                <Toolbar variant="dense" className="toolbar">
                    <Box className='cursor' >
                        <Typography className="tituloNavbar" variant="h5" color="inherit">
                            ACACIA
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className="menuNavbar">
                                    HOME
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/sobre">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" className="menuNavbar">
                                    SOBRE NÓS
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit" className="menuNavbar">
                                CONTATO
                            </Typography>
                        </Box>

                        <Link to="/login">
                            <Box mx={1} className='cursor' onClick={Lougout}>
                                <Typography variant="h6" color="inherit" className="menuNavbar">
                                    LOGOUT
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
