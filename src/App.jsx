import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import History from './pages/History';
import AppProvider from './context/AppContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
