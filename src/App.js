import React from 'react';
import logo from './images/logo.svg';
import logoSellie from './images/logo_sellie.svg'
import { grey } from '@material-ui/core/colors/';

import {

  makeStyles,

} from '@material-ui/core/styles';
import {TextField, Box} from '@material-ui/core/';

import './App.css';



const useStylesReddit = makeStyles((theme) => ({
  root: {
    color: '#2A3947',
    fontSize: '15px',
    overflow: 'hidden',
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#fff',
    },
    '&$focused': {
      backgroundColor: '#fff',
    },
  },
  focused: {},
}));

function RedditTextField(props) {
  const classes = useStylesReddit();
  return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoSellie} className="logoSellie" alt="logo" />
        <h1>Crea una cuenta</h1>
        <span>Somos la herramienta para comenzar tu negocio online</span>     
        <form>
          <Box className="boxForm">
          
            <RedditTextField
              label="Nombre"
              defaultValue=""
              variant="filled"
              id="reddit-input"
            />
            <RedditTextField
              label="Apellidos"
              defaultValue=""
              variant="filled"
              id="reddit-input"
            />
            <RedditTextField
              label="Correo Electrónico"
              defaultValue=""
              variant="filled"
              id="reddit-input"
            />
            <RedditTextField
              label="Contraseña"
              defaultValue=""
              variant="filled"
              id="reddit-input"
              type="password"
            />
            <RedditTextField
              label="Confirmar Contraseña"
              defaultValue=""
              variant="filled"
              id="reddit-input"
              type="password"
            />
          </Box>
        </form>
        
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
