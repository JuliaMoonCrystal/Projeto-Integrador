import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Home.css';
import { useHistory } from 'react-router';
import CarouselComponent from '../../components/carrossel/CarrosselComponent';
import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Home() {
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
            history.push("/login")

        }
    }, [token])
    return (
        <div>
            <Grid container>
                <Grid xs={12} className="fundo">
                    <Box>
                        <Typography className='fonteHome2' padding={12} variant="h5"  >Vida com sustentabilidade, renovação e qualidade do saneamento básico</Typography>
                        <Box className="center">
                            <img src="https://i.imgur.com/XcY72vS.png" alt="Acacia com logo" width="50%" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <div>
                <Grid container>
                    <Grid xs={6}>

                        <Box display="flex" alignItems="center" >
                            <Box className="p">
                                <img src="https://i.imgur.com/pu1piPx.png" alt="Logo desenho da árvore acácia" className="image"/>
                            </Box>
                            <Box className="cor">
                                <Typography className='titulo1' variant="h5" padding={2} > • PROJETO ACÁCIA</Typography>
                            </Box>
                        </Box>

                            <Typography className='text1' variant="h6" padding={4} component="h5" justifyContent="flex-start" >O Projeto Acácia é uma rede social que tem o objetivo de ajudar locais que não tenham tratamento de esgoto e água encanada, ou seja, saneamento básico, já que é um assunto de interesse global que atinge diretamente a vida de todas as pessoas. Onde o maior objetivo é levar o tratamento de esgoto para que possam tratar a água para que seja reutilizada adequadamente para que não haja desperdício. Assegurar a disponibilidade e a gestão sustentável da água e saneamento para todos. </Typography>

                            <Box alignItems="flex-end" paddingTop={2} >

                                <Link to="/sobre" className="text-decorator-none">
                                    <Typography className='text1 veja' variant="h6"  component="h5">• Veja mais<br /> ________________________________________________________________  </Typography>
                                </Link>

                            </Box>

                    </Grid>

                    <Grid xs={6} >
                        <Box padding={2}>
                            <img src="https://live.staticflickr.com/3499/5711086244_f28a63f6a9_b.jpg" alt="Imagem de uma criança tomando banho de mangueira" className="border" width="100%" />
                        </Box>
                    </Grid>

                </Grid>
            </div>

            <div>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid xs={12}>
                        <Box padding={2}>

                            <img src="https://i.imgur.com/XrchBDJ.png" alt="Icone de esgoto" width="100%"/>
                        </Box>
                    </Grid>

                </Grid>
            </div>

            <div className='Um carrosel com informações sobre saneamento básico'>
                <Grid container direction="row" justifyContent="center" alignItems="center" className='border3'>

                    <Grid xs={12} >

                        <Box marginTop={2} padding={2} style={{ backgroundColor: "#eafefe" }}>
                            <CarouselComponent />
                        </Box>

                    </Grid>
                </Grid>
            </div>

        </div>

    )
}

export default Home;