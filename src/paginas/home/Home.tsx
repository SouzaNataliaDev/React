import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';

import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    let history = useHistory();

    const token = useSelector<TokenState, TokenState["tokens"]>( /*acessa o store e atribui o valor para a constante token*/
                                                                    /*TokenState foi criado na model*/
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
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
            history.push("/login")
        }
    }, [token])
    /*Ele monitora no useLocalStorage se tem um token,  e se ele não exitir a função é acionada e ele não permite que o usuario acesse a home e redireciona ele para fazer login*/

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vind@!</Typography>

                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                        <Button variant="outlined" className='botao'>Postagens</Button>
                        </Link>
                    </Box>

                </Grid>

                
                    <img className="Capahome" src="https://i.imgur.com/lmqjKTh.png" alt="" />
               

                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;