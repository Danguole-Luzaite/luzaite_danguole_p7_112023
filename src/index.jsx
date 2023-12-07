import React from "react";
import { createRoot } from 'react-dom/client';
import Router from "./Router";

// Utilisé la version React 18, nouveau moteur de rendu d'API racine createRoot qui remplace ReactDOM.render

const container = document.getElementById('root');
const root = createRoot(container);


root.render(<Router/>);