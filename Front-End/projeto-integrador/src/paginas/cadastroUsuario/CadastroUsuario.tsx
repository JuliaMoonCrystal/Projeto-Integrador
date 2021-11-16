import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React, {useState, useEffect,ChangeEvent}from "react";
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { padding } from "@mui/system";
import { Link, useHistory  } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px' }}
        >
            •
        </Box>
    );

    let history = useHistory();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            history.push("/Login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }


    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item xs={6} style={{
                    backgroundImage: `url(https://blabto.com/img1/robiniyailiakatsiyabelogotsvetaposadkaiu_21145A5B.jpg)`,
                    backgroundRepeat: 'no-repeat', width: '100vh', minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center'
                }}>

                </Grid>

                <Grid item xs={6} alignItems='center'>
                    <Box paddingX={20}>
                    <Card sx={{ minWidth: 275 }} className='card'>
                            <CardContent>
                                <form onSubmit={onSubmit}>
                                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth className='text' />
                                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='text' />
                                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth className='text' />
                                    <Box marginTop={2} textAlign='center'>

                                        <Link to='/login' className='text-decorator-none'>
                                            <Button variant='contained' color='secondary' className='btnCancelar'>
                                                Cancelar
                                            </Button>
                                        </Link>

                                        <Button type='submit' variant='contained' color='primary'>
                                            Cadastrar
                                        </Button>

                                    </Box>
                                </form>
                                <Box display='flex' justifyContent='center' marginTop={2}>
                                    <Box marginRight={1}>
                                        <Typography variant='subtitle1' gutterBottom align='center' className='link'>Já tem uma conta?</Typography>
                                    </Box>

                                    <Link to='/Login'>
                                        <Box marginRight={1}>
                                            <Typography variant='subtitle1' gutterBottom align='center' className='link'>Login</Typography>
                                        </Box>
                                    </Link>

                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </>
    );

}

export default CadastroUsuario;