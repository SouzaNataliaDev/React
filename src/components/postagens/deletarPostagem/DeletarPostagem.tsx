import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import { useHistory, useParams } from 'react-router-dom';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

{/*Exatamente igual ao DeletarTema (altera o nome das rotas*/}
function DeletarPostagem() {
    let history = useHistory();
    const { id } = useParams<{id: string}>(); /* informa que ele recebe como parametro um id*/
   
    const token = useSelector<TokenState, TokenState["tokens"]>( /*acessa o store e atribui o valor para a constante token*/
    /*TokenState foi criado na model*/
(state) => state.tokens
);


const [post, setPosts] = useState<Postagem>() /* as constantes estão recebendo do usuario (setPosts) e alterando o valor de (post) para o valor recebido, e alterando a lista de Postagem que é uma array*/

    useEffect(() => {
        if (token == "") {
          toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
            history.push("/login") /* verifica se o usuario esta ou não logado.*/
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)  /* verifica se o token existe.*/
        }
    }, [id])

    async function findById(id: string) {   
        buscaId(`/postagens/${id}`, setPosts, {  /*esse caminho é da rota do back end.*/
            headers: {
              'Authorization': token  
            }
          })
        }

        function sim() {
            history.push('/posts')   /*esse caminho é da rota do frontend.*/
            deleteId(`/postagens/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Postagem deletada com sucesso', {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
          }
        
          function nao() {
            history.push('/posts')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
              {post?.titulo} {/*pega o state de post e localiza o título da postagem que ousuario esta tentando deletar.*/}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button  onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;