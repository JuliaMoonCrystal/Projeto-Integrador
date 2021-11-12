import { Box } from '@mui/system';
import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Home.css';

function Home() {
    return (
        <div>
            <Grid container >
                <Grid xs={12} className="fundo">
                    <Box>
                        <Typography className='fonteHome2' padding={12} variant="h5"  >Vida com sustentabilidade, renovação e qualidade do saneamento básico</Typography>
                        <Typography className='fontHome1' padding={2} variant="h1" component="h1">ACÁCIA</Typography>
                    </Box>
                </Grid>
            </Grid>

            <div>
                <Grid container>
                    <Grid xs={6}>
                        <Box padding={2}>
                            <Typography className='titulo1' variant="h5" padding={2} justifyContent="flex-start"> • PROJETO ACÁCIA</Typography>

                            <Typography className='text1' variant="h6" padding={2} component="h5" justifyContent="flex-start" >O Projeto Acácia é uma rede social que tem o objetivo de ajudar locais que não tenham tratamento de esgoto e água encanada, ou seja, saneamento básico, já que é um assunto de interesse global que atinge diretamente a vida de todas as pessoas.Onde o maior objetivo é levar o tratamento de esgoto para que possam tratar a água para que seja reutilizada adequadamente para que não haja desperdício. Assegurar a disponibilidade e a gestão sustentável da água e saneamento para todos. </Typography>

                            <img src="https://i.imgur.com/pu1piPx.png" alt="Imagem em desenho da árvore acácia" width="300vh" height="270vh" />
                        </Box>
                    </Grid>

                    <Grid xs={6} >
                        <Box padding={2}>
                            <img src="https://live.staticflickr.com/3499/5711086244_f28a63f6a9_b.jpg" alt="Imagem de uma criança tomando banho de mangueira" className="border" width="100%" height="700vh" />
                        </Box>
                    </Grid>

                </Grid>
            </div>

            <div>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid xs={12}>
                        <Box padding={2}>

                            <img src="https://i.imgur.com/Ku2gsRh.png" alt="Icone de esgoto" width="100%" className="border2" />
                        </Box>
                    </Grid>

                </Grid>
            </div>

            <div className='Um carrosel com informações sobre saneamento básico'>
                <Grid container>
                    <Grid xs={12}>
                        <Box>
                            <Typography>Carrosel</Typography>
                        </Box>
                    </Grid>

                </Grid>

            </div>

        </div>

    )
}

export default Home;