import React from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import Container from '@mui/material/Container'
/*Dentro do texto da primeira box colocar uma imagem por trás para o texto ficar por cima*/
function Home() {
    return (
        <div className='Layout do pagina'>
            <Grid container>
                <Grid xs={12}>
                    <Box>
                        <Typography>Tananana </Typography>
                        <Typography variant="h1" gutterBottom color="textPrimary" component="h1" align="center" style={{ color: "primary" }}>ACÁCIA</Typography>
                    </Box>
                </Grid>
            </Grid>

            <div className='Texto sobre o projeto e uma foto do lado'>
                <Grid container>
                    <Grid xs={6}>
                        <Box>
                            <Typography> Nome do projeto em negrito </Typography>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "primary" }}>Um texto do que se trata o projeto</Typography>
                            <img src="" alt="Imagem bonita que a jessica colocou no grupo e abaixo da imagem um botão leia sobre" />
                        </Box>
                    </Grid>

                    <Grid xs={6}>
                        <Box>
                            <img src="" alt="Alguma imagem sobre tratamento de esgoto" />
                        </Box>
                    </Grid>

                </Grid>
            </div>

            <div className='Seis itens que consiste em uma imagem e sua funcao seguindo ordem de imagem e texto'>
                <Grid container>
                    <Grid xs={3}>
                        <Box>
                            <img src="" alt="Icone sobre esgoto" />
                        </Box>
                    </Grid>

                    <Grid xs={3}>
                        <Box>
                            <Typography>Frase sobre tratamento de esgoto</Typography>
                        </Box>
                    </Grid>

                    <Grid xs={3}>
                        <Box>
                            <img src="" alt="icone de agua" />
                        </Box>
                    </Grid>

                    <Grid xs={3}>
                        <Box>
                            <Typography>Frase sobre agua</Typography>
                        </Box>
                    </Grid>

                    <Grid xs={3}>
                        <Box>
                            <img src="" alt="icone de agua e esgoto" />
                        </Box>
                    </Grid>

                    <Grid xs={3}>
                        <Box>
                            <Typography>Frase sobre agua e esgoto</Typography>
                        </Box>
                    </Grid>

                </Grid>
            </div>

            <div className='Um texto sobre porcentagem da população que nao tem saneamento basico, uma foto no meio e o resto do resto para fica interativo'>
                <Grid container>
                    <Grid xs={4}>
                        <Box>
                            <Typography>Começo do texto da porcentagem do sanemanto basico</Typography>
                        </Box>
                    </Grid>

                    <Grid xs={4}>
                        <Box>
                            <img src="" alt="Foto de uma tabela ou algo assim" />
                        </Box>
                    </Grid>

                    <Grid xs={4}>
                        <Box>
                        <Typography>REsto do texto para ficar interativo</Typography>
                        </Box>
                    </Grid>

                </Grid>

                </div>

        </div>


    )
}

export default Home;
