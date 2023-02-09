import React from 'react'; // import react library
import './App.css'; // import custom css file
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; // import react router dom

import LandingPage from './components/landingpage/landingpage'; // import landing page
import Login from './components/loginpage/login'; // import login page

function App() {

  // 1. Create a new state variable
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // 2. Create a new function to update the state variable
  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/WriteAI" element={<LandingPage />} />
          <Route path="/login" element={<Login /*onLogin={handleLogin}*/ />} />
        </Routes>
      </Router>
  );
}

export default App;
