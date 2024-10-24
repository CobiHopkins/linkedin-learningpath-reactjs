import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {About, History} from './components/about/about';
import Contact from './components/contact/contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/about" element={<About />}>
        <Route path="history" element={<History />}/>
      </Route>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </BrowserRouter>
);