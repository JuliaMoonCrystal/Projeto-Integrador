import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './CadastroTema.css';

function CadastroTema() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: '',
            palavra_chave: '',
            titulo: ''
        })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id !== undefined) {
            console.log(tema)
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema atualizado com sucesso');
        } else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Tema cadastrado com sucesso');
        }
        back()

    }
    function back() {
        history.push('/tema')
    }

    return (
        <div>
            <Container maxWidth="sm" >
                <Card className='cardTema'>
                    <CardContent>
                        <form onSubmit={onSubmit} className='topoTema'>
                            <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                            <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                            <TextField value={tema.palavra_chave} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="palavra_chave" label="palavra_chave" variant="outlined" name="palavra_chave" margin="normal" fullWidth />
                            <TextField value={tema.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                            <Button type="submit" variant="contained" color="primary">
                                Finalizar
                            </Button>
                        </form>

                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default CadastroTema