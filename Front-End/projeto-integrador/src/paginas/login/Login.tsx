import { Box, Button, Card, CardContent, Grid, Link, TextField, Typography } from '@material-ui/core';
import { Padding } from '@mui/icons-material';
import React from 'react';
import './Login.css';

function Login() {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px' }}
        >
          •
        </Box>
      );
    return (
        <>
           <Grid container direction='row' justifyContent='center' alignItems='center'> 
            <Grid item xs={6}  alignItems='center'>
                <Box paddingX={20}>
                 <Card sx={{ minWidth: 275 }} style={{background :'#90ee90' ,borderRadius: '10%', padding: '10px'}}>
                   <CardContent> 
                    <form>
                       <Typography variant='h4' gutterBottom color ='textPrimary' component='h4' align='center' style={{fontWeight : 'bold', color : 'black'}}>Entrar</Typography>
                       <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth/>
                       <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                       <Box marginTop={2} textAlign='center'>
                          
                                <Button type='submit' variant='contained' style={{color : 'black', background:'#4169e1'}}>
                                    Logar
                                </Button>
                           
                        </Box>   
                    </form>
                       <Box display='flex' justifyContent='center' marginTop={2}>
                           <Box marginRight={1}>
                              <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                           </Box>

                           <Box marginRight={1}>
                              <Typography variant='subtitle1' gutterBottom align='center' style={{fontWeight: 'bold'}}>Cadastre-se</Typography>
                           </Box> 
                        </Box>
                          </CardContent>
                        </Card>   
                </Box>
            </Grid>
            <Grid item xs={6} style={{
                backgroundImage: `url(https://cdn.pixabay.com/photo/2015/04/24/00/24/flowers-737061_960_720.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}>

            </Grid>
        </Grid>
 
        </>
    )
}

export default Login

/*<Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' style={{color : 'red'}}>
                                    Logar
                                </Button>
                            </Link> */