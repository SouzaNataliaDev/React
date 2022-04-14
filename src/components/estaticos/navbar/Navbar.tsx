import { AppBar, Toolbar, Typography} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';

import { Box } from '@mui/material';
import '../navbar/Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';


function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    let history = useHistory();
    const dispatch = useDispatch();

    function quandoSair(){
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

   
    if(token != ""){
        navbarComponent =  <AppBar className='menu' position="static">
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
    }
    return (
        <>
        {navbarComponent}
        </>
    )
}

export default Navbar;
