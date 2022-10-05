//import React from 'react';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
//import GoriLogo from './app/assets/img/GoriLogo.png';
import ArtworksDirectoryPage from './pages/ArtworksDirectoryPage';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
//import { ARTWORKS } from './app/shared/ARTWORKS';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ArtworkDetailPage from './pages/ArtworkDetailPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchArtworks } from './features/artworks/ArtworksSlice';
import { fetchArtists } from './features/artists/artistsSlice';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArtworks());
    dispatch(fetchArtists());
  }, [dispatch]);

  return (
    <div className="App">

        <Header/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='directory' element={<ArtworksDirectoryPage />} />
            <Route path='directory/:artworkId' element={<ArtworkDetailPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='about' element={<AboutPage />} />

          </Routes>
        <Footer/>

    </div>
  );
}

export default App;
