import React, { useEffect } from 'react';
import { Card, Grid, TextField, Typography } from '@mui/material';
import './Sobre.css';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { borderRadius, Box } from '@mui/system';
import { CardContent, CardMedia } from '@material-ui/core';
import GitHubIncon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Sobre() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você prescisa estar logado',
                {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,

                }
            )
            history.push("/Login")

        }
    }, [token])

    return (
        <>
            <Grid className="backgound">

                <Grid container direction="row" justifyContent="center" alignItems="center" paddingTop="50px">
                    <Box>
                        <Typography variant="h3" gutterBottom color="black" align="center" className="font">Sobre Nós</Typography>
                    </Box>
                </Grid>


                <Grid container direction="row" justifyContent="center" alignItems="center" className="backgound-white">
                    <Grid alignItems="center" item xs={6} >
                        <Box style={{ margin: "50px" }}>
                            <Typography variant="h4" component="h4" className='texto'>Acacia</Typography>
                            <Typography variant="h6" component="h6" className='texto'>Nosso propósito</Typography>

                            <Typography color="textPrimary" align="center" textAlign="justify" className='texto'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://i.imgur.com/uDLMjiE.png" alt="" className="img" />
                    </Grid>
                </Grid>



                <Grid container direction="row" justifyContent="center" alignItems="center" className="backgound-white" width="90%" margin="auto" marginY="80px" borderRadius="30px" >
                    <Grid xs={5}>
                        <img src="https://ods.cr/sites/default/files/item06-deco.png" alt="" className="img" />
                    </Grid>

                    <Grid xs={5} alignItems="center">
                        <Box >
                            <Typography variant="h4" component="h4" className='texto'>ODS 6</Typography>
                            <Typography variant="h6" component="h6" className='texto'>ÁGUA POTÁVEL E SANEAMENTO</Typography>

                            <Typography color="textPrimary" align="center" textAlign="justify" className='texto'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Typography>
                        </Box>
                    </Grid>
                </Grid>





                <Grid container direction="row" justifyContent="center" alignItems="center" padding={5} style={{ backgroundColor: "white" }}>

                    <Box>
                        <Typography variant="h3" gutterBottom color="black" align="center" className="font">Desenvolvedores</Typography>
                    </Box>

                    <Grid container display="flex" direction="row" justifyContent="center" alignItems="center" borderRadius="20px" paddingY={5}>
                        <Grid item xs={2} className="cards" >
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://avatars.githubusercontent.com/u/47614833?v=4"
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Julia Farias
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="https://github.com/JuliaMoonCrystal" target="_blank">
                                            <GitHubIncon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/julia-farias-da-rocha-bb5703180/" target="_blank">
                                            <LinkedInIcon className="icons1" />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={2} className="cards">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://avatars.githubusercontent.com/u/88987516?v=4"
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Vitor Santana
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="https://github.com/vitorcool45" target="_blank">
                                            <GitHubIncon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/vitorsantana03/" target="_blank">
                                            <LinkedInIcon className="icons1" />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={2} className="cards">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://avatars.githubusercontent.com/u/88353298?v=4"
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Beatriz Paixão
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="https://github.com/biiah-paixao" target="_blank">
                                            <GitHubIncon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/beatriz-paixao/" target="_blank">
                                            <LinkedInIcon className="icons1" />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={2} className="cards">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://avatars.githubusercontent.com/u/89790032?v=4"
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Gustavo S.
                                        </Typography>


                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="https://www.linkedin.com/in/gustavo-sotrati/" target="_blank">
                                            <GitHubIncon className="icons" />
                                        </a>
                                        <a href="https://github.com/Guzius" target="_blank">
                                            <LinkedInIcon className="icons1" />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={2} className="cards">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://avatars.githubusercontent.com/u/86704425?v=4"
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Jessica Lemos
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        <a href="https://github.com/Jessicalemosgomes" target="_blank">
                                            <GitHubIncon className="icons" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/j%C3%A9ssica-lemos-gomes/" target="_blank">
                                            <LinkedInIcon className="icons1" />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    );

}

export default Sobre