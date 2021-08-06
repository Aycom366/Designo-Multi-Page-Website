import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { AppProvider } from './context';
import '../node_modules/leaflet/dist/leaflet.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

//the Animate on scroll global variable settings
AOS.init({
  duration: 2000,
  easing: 'Linear',
  delay: 100,
  offset: 300,
});

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
