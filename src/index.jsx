import React from 'react';
import ReactDOMClient from 'react-dom/client';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<Accueil/>} />
          </Routes>
      </Router>
  </React.StrictMode>
)


