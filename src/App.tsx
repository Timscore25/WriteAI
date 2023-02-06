import LandingPage from './components/landingpage/landingpage';
import Login from './components/loginpage/login';

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
