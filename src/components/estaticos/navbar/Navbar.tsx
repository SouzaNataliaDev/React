import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import '../navbar/Navbar.css';
function Navbar() {
    return (
        <>
            <AppBar className='menu' position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                        <a href="Home" target="_blank">
                                <HomeIcon style={{ fontSize: 30, color: "white" }} />
                            </a>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                            <a href="Login" target="_blank">
                                logout
                                </a>
                            </Typography>
                            
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
