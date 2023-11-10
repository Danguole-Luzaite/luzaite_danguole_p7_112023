import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Header from './components/Header';
import APropos from './pages/A_Propos';
import Logement from './pages/Logement';
import Footer from './components/Footer';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
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


