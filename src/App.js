import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import KullaniciSozlesmesi from './pages/KullaniciSozlesmesi';
import GizlilikSozlesmesi from './pages/GizlilikSozlesmesi';
import ResultsPage from './pages/ResultsPage';
import DetailsPage from './pages/DetailsPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kullanici-sozlesmesi" element={<KullaniciSozlesmesi />} />
          <Route path="/gizlilik-sozlesmesi" element={<GizlilikSozlesmesi />} />
          <Route path="/results/:type" element={<ResultsPage />} />
          <Route path="/details/:type/:title" element={<DetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
