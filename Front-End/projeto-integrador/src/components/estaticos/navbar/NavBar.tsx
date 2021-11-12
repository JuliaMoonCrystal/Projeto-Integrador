import React from 'react'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import './NavBar.css';
import useLocalStorage from 'react-use-localstorage';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <Link to="/home" className="fontNav1">
                        <Box>
                            <img src="https://i.imgur.com/pu1piPx.png" alt="Imagem da ávore de acácia" width="40px" />
                        </Box>
                    </Link>

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
                            <Box mx={1} onClick={Lougout}>
                                <Typography variant="h6" >Logout</Typography>

                            </Box>
                        </Link>

                        <Box alignItems="rigth" ml="auto" >
                            <Button
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon className="icon" />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Minha conta</MenuItem>

                                <Link to={"/posts"} className='text-decorator-none'>
                                    <MenuItem onClick={handleClose}>Ver Postagens</MenuItem>
                                </Link>

                                <Link to={"/tema"} className='text-decorator-none'>
                                    <MenuItem onClick={handleClose}>Ver temas</MenuItem>
                                </Link>

                                <Link to={"/formularioPostagem"} className='text-decorator-none'>
                                    <MenuItem onClick={handleClose}>Fazer Postagem</MenuItem>
                                </Link>

                                <Link to={"/formularioTema"} className='text-decorator-none'>
                                    <MenuItem onClick={handleClose}>Adicionar novo tema</MenuItem>
                                </Link>

                                <Link to={"/login"} className='text-decorator-none'>
                                    <MenuItem onClick={Lougout}>Logout</MenuItem>
                                </Link>

                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;


