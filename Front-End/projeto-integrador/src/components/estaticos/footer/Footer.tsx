import { Box, Grid, Typography } from "@material-ui/core";
import  GitHubIncon  from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { border, margin } from "@mui/system";
import React from "react";
import './Footer.css';

function Footer() {
    return(
      <>
      <Grid container>
                <Grid xs={12}>
                    <Box className="background">
                        <Box  className="fontFooter1">

                        <a href="https://github.com/JuliaMoonCrystal/Projeto-Integrador" target="_blank">
                                <GitHubIncon style={{ fontSize: 50, color: "black",}} />
                            </a>

                            <Typography variant="h5">Veja nosso código</Typography>
                            
                        </Box>

                        <Box paddingTop={3}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }} >
                            © 2021 Copyright</Typography>
                        </Box>

                    </Box>
                    
                </Grid>
            </Grid>
      </>

    );

}

export default Footer;