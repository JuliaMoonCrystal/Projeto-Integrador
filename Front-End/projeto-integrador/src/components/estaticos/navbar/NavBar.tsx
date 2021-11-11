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
        alert('Usuario deslogado com sucesso')
    }

    return (
        <>
            <AppBar position="fixed" className="inicio">
                <Toolbar >
                    <Box>
                        <img src="https://i.imgur.com/pu1piPx.png" alt="Imagem da ávore de acácia" width="40px" />
                    </Box>

                    <Box className="flex">
                        <Link to="/home" className="fontNav1">
                            <Box mx={1} >

                                <Typography variant="h6">Home</Typography>

                            </Box>
                        </Link>

                        <Link to="/sobre" className="fontNav1">
                            <Box mx={1} >
                                <Typography variant="h6">Sobre nós</Typography>


                            </Box>
                        </Link>

                        <Link to="/login" className="fontNav1">
                            <Box mx={1}  onClick={Lougout}>
                                <Typography variant="h6" >Logout</Typography>

                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
