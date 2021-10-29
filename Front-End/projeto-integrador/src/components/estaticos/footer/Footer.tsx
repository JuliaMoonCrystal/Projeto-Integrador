import { Box, Grid, Typography } from "@material-ui/core";
import  GitHubIncon  from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { border, margin } from "@mui/system";
import React from "react";

function Footer() {
    return(
      <>
      <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "blue", height: "90px" ,padding : '5px'}}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>
                            Veja o código do nosso projeto </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">

                            <a href="https://github.com/Guzius/Projeto-Integrador" target="_blank">
                                <GitHubIncon style={{ fontSize: 50, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "blue", height: "60px" }}>
                        <Box paddingTop={3}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >
                            © 2021 Copyright</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
      </>

    );

}

export default Footer;