import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllEvents from './pages/AllEvents';
import LocationEvents from './pages/LocationEvents';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/location/:id" element={<LocationEvents />} />

      </Routes>
      </div>
  );
}

export default App;