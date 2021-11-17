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

                <Grid container className="sobrenos">
                    
                    <Box>
                        <Typography variant="h3" gutterBottom  className="font">Sobre nós</Typography>
                    </Box>
                </Grid>


                <Grid container  className="backgound-white">

                    <Grid alignItems="center" item xs={6} >

                        <Box style={{ margin: "50px" }}>

                            <Typography variant="h4" className='texto'>• Acácia</Typography>

                            <Typography variant="h5" className='texto'>— Nosso propósito:</Typography>

                            <Typography variant="h6" className='texto2'> No Brasil, 16% das pessoas não têm água tratada e 47% não têm acesso à rede de esgoto, segundo dados do Sistema Nacional de Informações sobre Saneamento (SNIS). São 35 milhões de brasileiros sem recursos hídricos seguros, e 100 milhões precisando usar medidas alternativas para lidar com os dejetos. Os números também têm melhorado ao longo dos anos, mas de forma lenta. Em 2011, 17,6% da população não tinha água tratada, e mais da metade dos brasileiros, o equivalente a 51,9%, não tinha acesso à rede de coleta de esgoto.</Typography>

                            <Typography variant="h6" className='texto2'> Com base nessas informações decidimos criar uma rede social onde pessoas com déficit de saneamento básico possam se cadastrar e nos dizer melhorias que podem ser feitas em sua região, como tratamento de esgot, água encanada e saneamento básico completo. Visando o problema de todo o Brasil nossa rede começará averiguando primeiramente a falta de estrutura de saneamento do estado de São Paulo, onde futuramente implementaremmos aos outros estados.</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={6}>
                        <img src="https://i.imgur.com/f0tgH0k.png" alt="" className="img" />
                    </Grid>
                </Grid>



                <Grid container className="backgound-white border2"  marginY="80px"  >
                    <Grid xs={5}>
                        <img src="https://ods.cr/sites/default/files/item06-deco.png" alt="" className="img2" />
                    </Grid>

                    <Grid xs={5} alignItems="center">
                        <Box >
                            <Typography variant="h4" component="h4" className='texto'>• ODS 6</Typography>

                            <Typography variant="h5" component="h6" className='texto'>— Água potável e saneamento</Typography>

                            <Typography  variant="h6" className='texto2'> Uma em cada três pessoas no mundo não tem acesso a água potável. O dado alarmante é do relatório do Programa Conjunto de Monitoramento para Progresso na Água Potável, Saneamento e Higiene: 2000-2017 e preocupa justamente porque a água está no centro do desenvolvimento sustentável e das suas três dimensões – ambiental, econômica e social. Por isso, garantir o seu acesso universal e seguro é o sexto item da lista de Objetivos de Desenvolvimento Sustentável das Nações Unidas, para serem cumpridos até o ano de 2030. Saiba mais sobre eles por aqui. </Typography>
                        </Box>
                    </Grid>
                </Grid>





                <Grid container className="backgound-white">

                    <Box>
                        <Typography variant="h3" className="font">Desenvolvedores</Typography>
                    </Box>

                    <Grid container className="alinhamento" paddingY={5}>
                        <Grid item xs={2} className="cards" >
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://avatars.githubusercontent.com/u/47614833?v=4"
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" className='texto3'>
                                            Julia Farias
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small">
                                        <a href="https://github.com/JuliaMoonCrystal" target="_blank">
                                            <GitHubIncon className="icons alinhamento2" />
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
                                        <Typography gutterBottom variant="h6" className='texto3'>
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
                                        <Typography gutterBottom variant="h6" className='texto3'>
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
                                        <Typography gutterBottom variant="h6" className='texto3'>
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
                                        <Typography gutterBottom variant="h6" className='texto3'>
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