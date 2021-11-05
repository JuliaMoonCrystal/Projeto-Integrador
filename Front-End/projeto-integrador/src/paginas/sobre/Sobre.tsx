import React from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
import './Sobre.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Box>
                    <Typography variant="h3" gutterBottom color="textPrimary" align="center">Sobre Nós</Typography>
                </Box>
            </Grid>


            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={6} >
                    <Box>
                        <Typography variant="h4" component="h4" align="center" className="titulo">Acacia</Typography>
                        <Typography variant="h5" component="h5" align="center" className="titulo">Nosso propósito</Typography>

                        <Typography color="textPrimary" align="center" textAlign="justify" style={{ margin: "50px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                    </Box>

                </Grid>
                <Grid item xs={6}>
                    <img src="https://i.imgur.com/sSQcxy7.png" alt="" className="img" />
                </Grid>
            </Grid>





            <Grid container direction="row" justifyContent="center" alignItems="center" padding={5} style={{ backgroundColor: "#44A2AE" }}>
                <Box>
                    <Typography variant="h3" gutterBottom color="textPrimary" align="center"> Team Dev</Typography>
                </Box>

                <Grid container display="flex" direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={2} className="card">
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/47614833?v=4  "
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Julia Farias
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className="card">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/88987516?v=4"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Vitor Santana
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className="card">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/88353298?v=4"
                                    alt=""
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Beatriz Paixão
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className="card">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/89790032?v=4"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Gustavo S.
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={2} className="card">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://avatars.githubusercontent.com/u/86704425?v=4"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Jessica Lemos
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );

}

export default Sobre