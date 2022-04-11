import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue); /*função que altera de 1 para 2*/
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className= "corTabela" centered  onChange={handleChange}>
            <Tab className='Botao' label="Todas as postagens" value="1"/>
            <Tab className='Botao' label="Sobre o tema" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography  variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >Sobre o tema do blog:</Typography>
          <Typography  variant="body1" gutterBottom color="textPrimary" align="justify">Pensei em falar sobre as pequenas alegrias da vida e os pequenos ranços que fazem parte do dia a dia de varias pessoas. </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;