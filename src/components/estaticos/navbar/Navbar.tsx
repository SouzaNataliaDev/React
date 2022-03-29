import React from 'react';
import { AppBar, Toolbar, Typography, Box,} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
function Navbar() {
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
                        
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                           
                        
                            <Link to='/login' className='cursor'>
                            <Box mx={1}  >
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                                </Box>
                            </Link>
                            
                                  
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
