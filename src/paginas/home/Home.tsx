import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';

import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function Home() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token'); /*esta armazenando os tokens*/

    useEffect(() => {
        if (token != "") {
            alert('Você precisa estar logado!')
            history.push("/login")
        }
    }, [token]) /*Ele monitora no useLocalStorage se tem um token,  e se ele não exitir a função é acionada e ele não permite que o usuario acesse a home e redireciona ele para fazer login*/
    
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vind@!</Typography>
                       
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem/>
                        </Box>
                        <Button variant="outlined"  className='botao'>Postagens</Button>
                    </Box>

                </Grid>

                <Grid item xs={6} >
                    <img  className= "Capahome" src="https://i.pinimg.com/564x/df/3f/58/df3f58b9f1df5054e6314c866f53a6e9.jpg" alt="" width="95%" height="100%"/>
                </Grid>

                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;