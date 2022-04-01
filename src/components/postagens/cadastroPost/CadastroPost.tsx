import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useHistory, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';

function CadastroPost() {
    let history = useHistory(); /*reinderiza a pagina quando recebe ocorre mudança no componente */
    const { id } = useParams<{ id: string }>(); /* pega o parametro da url, o {id} */
    const [temas, setTemas] = useState<Tema[]>([]) /*[] TEM CONCHETES POR  QUE É UM ARRAY*/
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema]) /*Ele monitora o usestate (tema) e quando ele visualiza uma mudaça no select de postagem, a função é acionada*/

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)  /*função criada na linha 58*/
        }
    }, [id])

    async function getTemas() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()  /*pega as informações que o usuario digita, e envia as informações de cadastro de postagem, 
                              para verificar se já exite e deve acionar o metodo put ou criar e acionar o post (alerta conforme método.)*/

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, { /*As funções foram criadas na service */
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem atualizada com sucesso');
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Postagem cadastrada com sucesso');
        }
        back() 

    }

    function back() {  /*Função retorna para o caminho /posts usando o hook useHistory, ela é chamada na função onSubmit linha 95*/
        history.push('/posts')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                
                <TextField 
                value={postagem.titulo} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
                 id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />

                <TextField 
                value={postagem.texto}
                 onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} 
                 id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    
                    <Select
                        labelId="demo-simple-select-helper-label" /*configuração do materialUi por padrão do botão select*/
                        id="demo-simple-select-helper"

                        /*Essa função está atualizando os temas da tabela ou criando casa o id não exista */
                        onChange={(e) => buscaId(`/tema/${e.target.value}`, setTema, { /*onChange é disparado quando uma mudança ocorre no componente. 
                                                                                           quando ele é executado a const da linha 24 é atualizada*/
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            )) /* esse método pega o id de cada tema e descrição, e imprime a array na tela (somente a descrição, id apenas armazena*/
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;