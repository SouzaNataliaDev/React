import React from 'react';
import { AppBar, Toolbar, Typography, Box,} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import '../navbar/Navbar.css';
function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let history = useHistory();


    function quandoSair(){
        setToken('')
        alert("Usuário deslogado!")
        history.push('/login')
    }
    return (
        <>
            <AppBar className='menu' position="static">
                <Toolbar variant="dense">
                    <Box className='cursor' >
                        <Typography variant="h5" color="inherit">
                        <Link to='/home' >
                                <HomeIcon style={{ fontSize: 30, color: "white" }} />
                            </Link>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        
                        <Box mx={1}>
                        <Link className='cursor' to='/posts' >
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} >
                            <Link className='cursor' to='/temas'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} >
                        <Link className='cursor' to='/formularioTema'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                            </Link>
                        </Box>
                           
                        
                          
                            <Box mx={1}  className='cursor' onClick={quandoSair} >
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                                </Box>
                            
                            
                                  
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
