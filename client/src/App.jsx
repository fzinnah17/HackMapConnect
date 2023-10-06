import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import Events from './pages/Events';
import AllEvents from './pages/AllEvents';
import LocationEvents from './pages/LocationEvents';
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/events/:id" element={<Events />} /> */}
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="/location/:id" element={<LocationEvents />} />

      </Routes>

  );
}

export default App;