import React from 'react'
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import Container from '@mui/material/Container'


function Home() {
    return (
        <div>
            <Grid container>
                <Grid xs={12} className="fundo">
                    <Box>
                        <Typography padding={12} variant="h5" align="center" style={{color: "#5E633B"}} >Vida com sustentabilidade, renovação e qualidade do saneamento básico</Typography>
                        
                        <Typography padding={2} variant="h1" gutterBottom color="#454742" component="h1" align="center" style={{ color: "primary" }}>ACÁCIA</Typography>
                    </Box>
                </Grid>
            </Grid>

            <div>
                <Grid container>
                    <Grid xs={6}>
                        <Box padding={2}>
                            <Typography variant="h5" padding={2} justifyContent="flex-start" alignItems="justify" style={{borderColor: "white", backgroundColor: "#62935B", color: "white"}}> • PROJETO ACÁCIA</Typography>

                            <Typography variant="h6" padding={2} component="h5" justifyContent="flex-start" >O Projeto Acácia é uma rede social que tem o objetivo de ajudar locais que não tenham tratamento de esgoto e água encanada, ou seja, saneamento básico, já que é um assunto de interesse global que atinge diretamente a vida de todas as pessoas.Onde o maior objetivo é levar o tratamento de esgoto para que possam tratar a água para que seja reutilizada adequadamente para que não haja desperdício. Assegurar a disponibilidade e a gestão sustentável da água e saneamento para todos. </Typography>

                            <img src="https://scontent.fcgh43-1.fna.fbcdn.net/v/t39.30808-6/252694777_4271275459668746_2660952814401619733_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEQ6QYjPSrQf7SsXpWSfqbo2uCpihjl5Hba4KmKGOXkdlhjHmawq_n0x1MauBo_LVzMd5zN1I32tfItcy4FtW0P&_nc_ohc=f9vBY_stUoEAX9ApIss&_nc_ht=scontent.fcgh43-1.fna&oh=8ae50fa03bf2bbc07c35b78379b68b6e&oe=61875FDB"  alt="Imagem em desenho da árvore acácia"/>
                        </Box>
                    </Grid>

                    <Grid xs={6} padding={2}>
                        <Box padding={2}>
                            <img src="https://live.staticflickr.com/3499/5711086244_f28a63f6a9_b.jpg" alt="Imagem de uma criança tomando banho de mangueira" width="675vh" height="700vh"/>
                        </Box>
                    </Grid>

                </Grid>
            </div>

            <div>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid xs={4}>
                        <Box padding={2}>
                            <Typography variant="h5" padding={2} >Tratamento de esgoto</Typography>

                            <img src="https://cdn-icons-png.flaticon.com/512/1272/1272590.png" alt="Icone de esgoto" width="250vh" height="250vh"/>
                        </Box>
                    </Grid>

                    <Grid xs={4}>
                        <Box padding={5}>
                            <Typography variant="h5">Água encanada</Typography>

                            <img src="https://cdn-icons.flaticon.com/png/512/5211/premium/5211314.png?token=exp=1635896441~hmac=eb299887fe14f919c31be1b7d4a15629" alt="Icone de água" width="250vh" height="250vh" />
                        </Box>
                    </Grid>

                    <Grid xs={4}>
                        <Box padding={2}>
                        <Typography variant="h5" padding={2} >Saneamento básico</Typography>

                        <img src="https://scontent.fcgh43-1.fna.fbcdn.net/v/t39.30808-6/s720x720/252318700_4271548252974800_698931119949209231_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHWFXfN1DGec0GSi9N5lADoUSLvLRZQNjRRIu8tFlA2NMXihNKOz84yFrK-602KecA690dU2xLGUbAXzgUHd6YV&_nc_ohc=NBdZ37tY2MsAX8XQIMv&_nc_ht=scontent.fcgh43-1.fna&oh=f2d3f1af8e90e1b784db6d32f549b5d6&oe=6186C612" alt="   icone de saneamento básico" width="250vh" height="250vh" />
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
