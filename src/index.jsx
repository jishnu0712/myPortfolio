import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);
