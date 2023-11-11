import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Header from './components/Header';
import APropos from './pages/A_Propos';
import Logement from './pages/Logement';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: "Montserrat-Medium", Helvetica;
  }
`

root.render(
  <React.StrictMode>
    <Router>
        <GlobalStyle/>
        <Header />  
          <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/A_Propos" element={<APropos />} />
              <Route path="/Logement" element={<Logement />} />
          </Routes>
        <Footer/>
    </Router>
  </React.StrictMode>
)


