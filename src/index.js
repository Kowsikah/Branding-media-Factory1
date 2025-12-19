import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Toaster position="top-right" reverseOrder={false} />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
