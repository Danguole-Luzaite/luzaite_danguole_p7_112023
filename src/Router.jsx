import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import PageDErreur from './pages/PageDErreur';
import Accueil from './pages/Accueil';
import APropos from './pages/A_Propos';
import Logement from './pages/Logement';
import Footer from './components/Footer';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: "Montserrat-Medium", Helvetica;
  }
`

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/Kasa">
          <GlobalStyle/>
          <Header />  
          <Routes>
              <Route path="*" element={<PageDErreur />} />
              <Route path="/" element={<Accueil />} />
              <Route path="/A_Propos" element={<APropos />} />
              <Route path="/Logement/:id" element={<Logement />}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  )
};

export default Router;