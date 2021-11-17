import { Box, Grid, Typography } from "@material-ui/core";
import GitHubIncon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { border, margin } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import './Footer.css';

function Footer() {
   
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if(token != ""){
        footerComponent= <Grid container className="background">
        <Grid xs={8}>
            <Box  padding={2}>
                <Box>

                    <Typography className="fontFooter1" variant="h5">• Sobre nós</Typography>

                </Box>

                <Box paddingBottom={5}>

                    <Typography className="fontFooter1" variant="h6">
                        No Brasil, 16% das pessoas não têm água tratada e 47% não têm acesso à rede de esgoto, segundo dados do Sistema Nacional de Informações sobre Saneamento (SNIS). Cientes disso nosso grupo de desenvolvedores criaram uma rede social onde as pessoas possam entrar e cadastrar seu problema para que possamos entrar em contato com a empresa de saneamento básico da região para que possa levar uma vida digna aos moradores.</Typography>

                </Box>

            </Box>

        </Grid>

        <Grid xs={4}>
            <Box className="background">
                <Box>

                    <Typography className="fontFooter3" variant="h5">• Nos acompanhe:</Typography>

                </Box>

                <Box>
                    <img src="https://cdn-icons-png.flaticon.com/512/1051/1051360.png" alt="ìcone do Facebook" width="11%" className="space" />



                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" alt="ìcone do Instagran" width="11%" className="space" />



                    <img src="https://cdn-icons-png.flaticon.com/512/160/160194.png" alt="ìcone do Twitter" width="11%" className="space" />

                    <Box >

                        <Typography className="fontFooter3" variant="h5">• Codificação:</Typography>

                    </Box>

                    <a href="https://github.com/JuliaMoonCrystal/Projeto-Integrador" target="_blank">
                        <GitHubIncon className="space2" />
                    </a>


                </Box>

            </Box>


        </Grid>

    </Grid>
    }
    
    return (
        <>
             {footerComponent}
        </>

    );

}

export default Footer;