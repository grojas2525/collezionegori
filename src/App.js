//import React from 'react';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import GoriLogo from './app/assets/img/GoriLogo.png';
import ArtworksDirectoryPage from './pages/ArtworksDirectoryPage';
//import { ARTWORKS } from './app/shared/ARTWORKS';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">

        <Header/>
        <ArtworksDirectoryPage />
        <Footer/>

    </div>
  );
}

export default App;
