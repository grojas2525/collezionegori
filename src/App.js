//import React from 'react';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import GoriLogo from './app/assets/img/GoriLogo.png';
import ArtworksList from './features/artworks/ArtworksList.js';
//import { ARTWORKS } from './app/shared/ARTWORKS';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <ArtworksList />
        <Footer/>

    </div>
  );
}

export default App;
