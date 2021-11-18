
   
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core';
import useLocalStorage from "react-use-localstorage";
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/actions';
import { toast } from 'react-toastify';

function Login() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
      {
        id: 0,
        nome: '',
        senha: '',
        usuario: '',
        token: ''
  
      }
    )
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
  
      setUserLogin({
        ...userLogin,
        [e.target.name]: e.target.value
      })
    }
    useEffect(() => {
      if (token !== '') {
        dispatch(addToken(token));
        history.push('/home')
      }
    }, [token])
  
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
      try {
        await login(`/usuarios/logar`, userLogin, setToken);
  
        toast.success('Usuário logado com sucesso',
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
      } catch (error) {
        toast.error('Dados divergentes',
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
      }
    }
  
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Login
                            </Button>

                        </Box>

                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography gutterBottom align='center' className='link'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='link'>
                            <Typography gutterBottom align='center' className='link2'>Cadastre-se</Typography>
                        </Link>

                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} style={{
                backgroundImage: `url(https://blabto.com/img1/robiniyailiakatsiyabelogotsvetaposadkaiu_21145A5B.jpg)`,
                backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
            }}></Grid>
        </Grid>
    );
}

export default Login;