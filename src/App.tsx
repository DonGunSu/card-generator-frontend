import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Navigation from './components/Navigation';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Router />
  </BrowserRouter>
);

export default App;
