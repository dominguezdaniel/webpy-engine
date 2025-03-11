import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import CatalogoPage from './pages/Catalogo.js';
import AcercaPage from './pages/Acerca.js';
import AnalyticsPage from './pages/Analytics.js';
import SigninPage from './pages/Signin.js';
import SignupPage from './pages/Signup.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/catalogo" element={<CatalogoPage />} />
         
      <Route path="/acerca" element={<AcercaPage />} />
         
      <Route path="/analytics" element={<AnalyticsPage />} />
         
      <Route path="/signin" element={<SigninPage />} />
         
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
