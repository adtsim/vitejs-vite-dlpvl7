import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import List from './pages/List';
import Population from './pages/Population';
import CustomRoute from './pages/CustomRoute';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/population" element={<Population />} />
      <Route path="/custom-route" element={<CustomRoute />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
