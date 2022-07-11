import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import GoriLogo from './app/assets/img/GoriLogo.png';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
               <Container>
                    <NavbarBrand href='/'>
                        <img src={GoriLogo} alt='gori logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
            Gori Collection - Pistoia, Italy
    </div>
  );
}

export default App;
